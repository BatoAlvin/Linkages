import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { redirect } from "next/dist/server/api-utils"
//import clientPromise from "lib/mongodb"
import clientPromise from '../../../lib/mongodb'


export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  //Database setup
  //database: process.env.DATABASE_URL,
  database: process.env.MONGODB_URI,
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  jwt: {},

  callbacks: {
    async redirect({ url, baseUrl}){
      return baseUrl + "/job"
    },
    async session({ session,token,user})
  {
    return session
  },
  }
})