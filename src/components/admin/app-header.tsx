'use client'

import { usePathname } from 'next/navigation'
import { admingMenuItems } from '@/constants'

export function AppHeader() {
  const pathname = usePathname()

  const title = admingMenuItems.find(item => item.href === pathname)?.title

  return (
    <header className='bg-background p-8 flex items-center justify-between'>
      <h1 className='text-4xl'>{title}</h1>
    </header>
  )
}
