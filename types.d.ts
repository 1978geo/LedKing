import { type DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type UserRole = 'ADMIN' | 'USER' | 'SUPERADMIN'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    user: ExtendedUser
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
    role: UserRole
  }
}
