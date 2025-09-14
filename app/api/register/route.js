import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("world_mart"); // ✅ use world_mart database
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Email already registered" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500 }
    );
  }
}
