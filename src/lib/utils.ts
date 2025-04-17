import { clsx, type ClassValue } from 'clsx'
import { redirect } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useSession } from 'next-auth/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function requireAuthClient() {
  const { data: session } = useSession()

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
