import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await MongoClient.connect(process.env.MONGODB_URI)
        const db = client.db("world_mart") 
        const user = await db.collection("users").findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found with this email")
        }

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        }
      },
    }),

    // ✅ Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ✅ Facebook login
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // 🔑 Attach user info to JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    // 🔑 Attach JWT data to session
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }
      return session
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
