'use client'

import { usePathname, useRouter } from 'next/navigation'
import { admingMenuItems } from '@/constants'
import { cn } from '@/lib/utils'
import React from 'react'
import { CreateCityDrawer } from './create-city-drawer'
import { ChevronLeftIcon } from 'lucide-react'

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
        'fixed top-0 left-0 right-0 lg:hidden bg-background flex flex-col text-white standalone:h-22 bg-gradient-to-r from-[rgba(4,21,128,0.85)] to-[rgba(132,56,140,0.85)] backdrop-blur',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between w-full py-6',
          title ? 'px-8' : 'px-4',
        )}
      >
        <h1 className='text-4xl flex items-center gap-x-5'>
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
        {pathname === '/admin/cities' && <CreateCityDrawer />}
      </div>
    </header>
  )
}
