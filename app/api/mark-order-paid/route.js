import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { orderId } = await req.json();
    if (!orderId) {
      return new Response(JSON.stringify({ success: false, error: "Missing orderId" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("world_mart");

    const result = await db.collection("orders").updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status: "paid", paidAt: new Date() } }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ success: false, error: "Order not found or already paid" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Mark order paid error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
