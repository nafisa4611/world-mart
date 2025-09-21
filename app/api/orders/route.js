import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req) {
  try {
    const {
      userEmail,
      cart,
      subtotal,
      discount = 0,
      total,
      billing,
      shippingAddress
    } = await req.json()

    console.log("Received order:", { userEmail, cart, subtotal, total, billing, shippingAddress }) // ✅ log inside function

    if (!userEmail || !cart?.length) {
      return NextResponse.json(
        { error: "Invalid order data" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("world_mart")

    const order = {
      userEmail,
      cart,
      subtotal,
      discount,
      total,
      billing,
      shippingAddress,
      status: "pending",
      createdAt: new Date(),
    }

    const result = await db.collection("orders").insertOne(order)
    console.log("🛒 Order saved:", result)

    return NextResponse.json({ success: true, orderId: result.insertedId })

  } catch (err) {
    console.error("Failed to save order:", err)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
