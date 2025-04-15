import NextAuth from 'next-auth'
import authConfig from '@/lib/auth.config'
import { DEFAULT_LOGOUT_REDIRECT } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth(req => {
  const isLoggedIn = !!req.auth
  const isExpired = req.auth?.expires && new Date(req.auth.expires) < new Date()
  console.log('AUTH: ', JSON.stringify(req, null, 2))

  if (req.nextUrl.pathname.startsWith('/admin') && (!isLoggedIn || isExpired)) {
    const newUrl = new URL(DEFAULT_LOGOUT_REDIRECT, req.nextUrl)
    return Response.redirect(newUrl)
  }
})

// Don't invoke Middleware on the routes below
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
