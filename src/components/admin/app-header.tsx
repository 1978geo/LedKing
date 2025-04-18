import React from 'react'
import { cn } from '@/lib/utils'
import { UserButton } from './user-button'

interface AppHeaderProps {
  className?: string
}

export function AppHeader({ className }: AppHeaderProps) {
  return (
    <header
      className={cn(
        'flex h-16 w-full bg-white border-b border-border',
        className,
      )}
    >
      <div className='flex items-center justify-between w-full h-full p-4'>
        <UserButton className='ml-auto' />
      </div>
    </header>
  )
}
