import Stripe from "stripe";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { orderId, sessionId } = await req.json();
    if (!orderId || !sessionId) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing orderId or sessionId" }),
        { status: 400 }
      );
    }

    // Ask Stripe directly whether this checkout session actually paid,
    // and that it belongs to the order being marked. Never trust a
    // client-supplied "paid" flag alone — anyone could set that in the URL.
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== "paid") {
      return new Response(
        JSON.stringify({ success: false, error: "Payment not verified" }),
        { status: 402 }
      );
    }

    if (session.metadata?.orderId !== orderId) {
      return new Response(
        JSON.stringify({ success: false, error: "Session does not match order" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("world_mart");

    const result = await db.collection("orders").updateOne(
      { _id: new ObjectId(orderId), status: { $ne: "paid" } },
      { $set: { status: "paid", paidAt: new Date(), stripeSessionId: sessionId } }
    );

    if (result.matchedCount === 0) {
      // Either it doesn't exist, or it's already paid — fetch current
      // status so the client can still show a success state on refresh.
      const existing = await db.collection("orders").findOne({ _id: new ObjectId(orderId) });
      if (existing?.status === "paid") {
        return new Response(JSON.stringify({ success: true, alreadyPaid: true }));
      }
      return new Response(
        JSON.stringify({ success: false, error: "Order not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Mark order paid error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
