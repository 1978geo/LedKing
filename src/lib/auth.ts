import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import authConfig from '@/lib/auth.config'
import { prisma } from '@/lib/prisma'
import { getUserById } from '@/actions/users'

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async authorized({ auth }) {
      return !!auth
    },
    async signIn({ user, account }) {
      // Allow OAuth without verification
      if (account?.provider !== 'credentials') return true

      if (!user.id) {
        return false
      }

      const existingUser = await getUserById(user.id)

      if (!existingUser?.emailVerified) {
        return false
      }

      // TODO: Add 2FA check

      return true
    },
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
