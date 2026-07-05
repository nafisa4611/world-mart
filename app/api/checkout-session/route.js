import Stripe from "stripe";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { orderId } = await req.json();

    const client = await clientPromise;
    const db = client.db("world_mart");

    const order = await db.collection("orders").findOne({
      _id: new ObjectId(orderId)
    });

    if (!order) return new Response(JSON.stringify({ error: "Order not found" }), { status: 404 });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: order.cart.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.title },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      // Pass Stripe's own session_id back so we can verify the payment
      // actually succeeded before marking the order as paid.
      success_url: `${process.env.NEXTAUTH_URL}/order-success/${order._id}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: { orderId: order._id.toString() },
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
