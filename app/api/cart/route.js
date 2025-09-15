import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");

  if (!userEmail) {
    return new Response(
      JSON.stringify({ error: "Missing userEmail" }),
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("world_mart");

    const cartDoc = await db.collection("carts").findOne({ userEmail });
    return new Response(
      JSON.stringify({ cartItems: cartDoc?.cartItems || [] }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch cart" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { userEmail, cartItems } = body;

    if (!userEmail || !cartItems) {
      return new Response(
        JSON.stringify({ error: "Missing data" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("world_mart");

    await db.collection("carts").updateOne(
      { userEmail },
      { $set: { cartItems } },
      { upsert: true }
    );

    return new Response(
      JSON.stringify({ message: "Cart saved successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to save cart" }),
      { status: 500 }
    );
  }
}
