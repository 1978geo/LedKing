'use server'

import { redirect } from 'next/navigation'
import { auth } from './auth'

export async function requireAuth() {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/login')
  }

  const isExpired = new Date(session?.expires).getTime() < Date.now()

  if (isExpired) {
    redirect('/auth/login')
  }

  if (
    session?.user?.role !== 'ADMIN' &&
    session?.user?.role !== 'SUPERADMIN' &&
    session?.user?.role !== 'USER'
  ) {
    redirect('/auth/login')
  }

  return session
}
