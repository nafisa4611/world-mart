import clientPromise from "@/lib/mongodb" // MongoDB connection
import bcrypt from "bcrypt"

export async function POST(req) {
  try {
    const { firstName, lastName, email, password } = await req.json()
    const client = await clientPromise
    const db = client.db("world-mart") // your database name

    // Check if user exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already registered" }), { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Insert new user
    await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    })

    return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 })
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 })
  }
}
