'use client'

import { usePathname } from 'next/navigation'
import { admingMenuItems } from '@/constants'
import { cn } from '@/lib/utils'
import React from 'react'

interface AppHeaderProps {
  children?: React.ReactNode
  className?: string
}

export function AppHeader({ className, children }: AppHeaderProps) {
  const pathname = usePathname()

  const title = admingMenuItems.find(item => item.href === pathname)?.title

  return (
    <header
      className={cn(
        'bg-background p-8 flex items-center justify-between standalone:h-22',
        className,
      )}
    >
      <h1 className='text-4xl'>{title}</h1>
      {children}
    </header>
  )
}
