import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { DEFAULT_LOGOUT_REDIRECT } from '@/routes'

// Keep middleware edge-safe: just decode the JWT instead of importing the full
// NextAuth config (which pulls in Prisma/bcrypt and can exceed Vercel's 1MB limit).
export default async function middleware(req: NextRequest) {
  // `getToken()` requires `secret` when `NEXTAUTH_SECRET` is not set.
  // In that case, fail closed by redirecting to the login page
  // instead of crashing the middleware.
  const secret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
  if (!secret) {
    const newUrl = new URL(DEFAULT_LOGOUT_REDIRECT, req.nextUrl)
    return Response.redirect(newUrl)
  }

  const token = await getToken({ req, secret })

  const isLoggedIn = !!token
  const exp = (token as { exp?: unknown } | null)?.exp
  const isExpired = typeof exp === 'number' ? exp * 1000 < Date.now() : false

  if (!isLoggedIn || isExpired) {
    const newUrl = new URL(DEFAULT_LOGOUT_REDIRECT, req.nextUrl)
    return Response.redirect(newUrl)
  }
}

// Don't invoke Middleware on the routes below
export const config = {
  matcher: ['/admin/:path*', '/admin'],
}
