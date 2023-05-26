import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/app/libs/prismadb"

//as of now the next 13 doesn't support for the auth files inside the app dir, so we ve to put it in the pages(only instance we ve to use the pages dir)

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma), //pass our prisma client into the adapter
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) { // this credential is gon be whatenver the user i/p is
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        // find the user in our prisma schema
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        //lets check whether the user exists or the incorrect p/w 
        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        // lets check the p/w is correct by using bcryypt
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        //if we pass all of those validations then pass/return the user to our client
        return user;
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development', //oncly wana debug in the dev mode
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);