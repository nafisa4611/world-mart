import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise
        const db = client.db("world-mart")

        const user = await db.collection("users").findOne({ email: credentials.email })
        if (!user) throw new Error("No user found with this email")

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) throw new Error("Incorrect password")

        return { id: user._id, name: `${user.firstName} ${user.lastName}`, email: user.email }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
