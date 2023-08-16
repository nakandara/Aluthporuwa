import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import clientPromise from '../../../database/connectDB'

export const authOptions = {
    secret: "8137DFWJP%^&*(OJD67",
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:"115349291449-buik3uifhd4t22q385b27cl6lks01alk.apps.googleusercontent.com",
      clientSecret:"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"
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


