import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import authConfig from '@/lib/auth.config'
import { prisma } from '@/lib/prisma'
import { getUserById } from '@/actions/users'

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && session?.user) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token }) {
      if (token?.sub) {
        const user = await getUserById(token.sub)
        if (user) {
          token.role = user.role
        }
      }
      return token
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
})
