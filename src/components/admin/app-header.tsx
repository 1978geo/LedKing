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
        'fixed top-0 w-full lg:hidden flex flex-col text-white bg-primary-purple z-50',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between w-full h-full py-4',
          title ? 'px-8' : 'px-4',
        )}
      >
        <h1 className='text-2xl flex items-center gap-x-5'>
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
