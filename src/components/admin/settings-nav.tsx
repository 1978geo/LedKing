'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { settingsMenuItems } from '@/constants'
import { cn } from '@/lib/utils'

export function SettingsNav() {
  const pathname = usePathname()

  return (
    <ul className='flex flex-col gap-y-4 py-4 border-r border-border pr-12'>
      {settingsMenuItems.map(item => (
        <li
          key={item.href}
          className='text-nowrap'
        >
          <Link
            href={item.href}
            className={cn(
              'text-sm font-medium text-slate-600 hover:text-indigo-900 hover:bg-indigo-50 hover:cursor-pointer py-2 px-6 rounded-md',
              pathname === item.href
                ? 'text-indigo-900 font-semibold bg-indigo-50'
                : '',
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
