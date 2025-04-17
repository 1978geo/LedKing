'use client'

import React from 'react'
import { ChevronLeftIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { admingMenuItems } from '@/constants'
import { cn } from '@/lib/utils'
import { UserButton } from './user-button'

interface AppHeaderProps {
  className?: string
}

export function AppHeader({ className }: AppHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()

  const title = admingMenuItems.find(item => item.href === pathname)?.title

  return (
    <header
      className={cn(
        'flex h-16 w-full bg-white border-b border-border',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between w-full h-full py-4',
          title ? 'px-8' : 'px-4',
        )}
      >
        <h1 className='text-xl flex items-center gap-x-5'>
          {title ?? (
            <>
              <ChevronLeftIcon
                className='size-6'
                onClick={() => router.back()}
              />
              LedKing
            </>
          )}
        </h1>
        <UserButton />
      </div>
    </header>
  )
}
