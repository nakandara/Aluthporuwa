import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import clientPromise from '../../../database/connectDB'

export const authOptions = {
    secret: "8137DFWJP%^&*(OJD67",
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages:{
    signIn:'/auth/signin'
  },
  adapter: MongoDBAdapter(clientPromise),
  
callbacks: {
 
}

}

export default NextAuth(authOptions)