'use client'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
  className?: string
}

export function LoginButton({
  children,
  mode = 'redirect',
  asChild,
  className,
}: LoginButtonProps) {
  const router = useRouter()

  const onClick = () => {
    router.push('/auth/login')
  }

  if (mode === 'modal') {
    return <span>TODO: implement modal</span>
  }

  return (
    <span
      className={cn('cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
