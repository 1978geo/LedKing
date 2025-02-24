'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { admingMenuItems } from '@/constants'
import logo from '@/assets/Logo.png'

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col w-60 border-r border-border h-screen p-4'>
      <div className='flex items-center gap-x-3 mb-6 mt-4'>
        <Image
          src={logo}
          alt='admin logo'
          className='w-12 object-contain'
          width={60}
          height={60}
        />
        <h3 className='font-semibold text-2xl'>LedKing</h3>
      </div>
      <ul className='space-y-2 w-full flex flex-1 flex-col h-full'>
        {admingMenuItems.map(item => (
          <li
            key={item.title}
            className='flex w-full items-center'
          >
            <Link
              href={item.href}
              className={cn(
                'flex w-full text-md font-medium rounded-xl border-l-2 border-l-transparent items-center text-slate-500 gap-x-3 hover:bg-blue-100/80 hover:cursor-pointer py-3 px-4',
                pathname === item.href
                  ? 'border-l-blue-600 bg-blue-100/80 text-blue-600'
                  : '',
              )}
            >
              <item.icon className='size-5' />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
