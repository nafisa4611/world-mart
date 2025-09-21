import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    // Get order data from request
    const {
      userEmail,
      cart,
      subtotal,
      discount,
      shipping,
      total,
      billing,
      shippingAddress,
    } = await req.json();

    // Basic validation
    if (!userEmail || !cart?.length) {
      return NextResponse.json(
        { error: "Invalid order data" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("world_mart"); // your DB name

    // Create order object
    const order = {
      userEmail,
      cart,
      subtotal,
      discount,
      shipping,          // include shipping amount
      total,
      billing,
      shippingAddress,
      status: "pending", // default status
      createdAt: new Date(),
    };

    // Insert into DB
    const result = await db.collection("orders").insertOne(order);
    console.log("🛒 Order saved:", result);

    // Return success with order ID
    return NextResponse.json({ success: true, orderId: result.insertedId });
  } catch (err) {
    console.error("Failed to save order:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
