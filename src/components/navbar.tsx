'use client'

import { navlinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex items-center gap-x-9', className)}>
      <ul className='flex gap-x-4 items-center w-full h-full'>
        {navlinks.map(link => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={cn(
                'text-white hover:underline underline-offset-2 text-sm uppercase',
                pathname === link.href && 'underline',
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
