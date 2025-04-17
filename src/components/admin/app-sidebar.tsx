'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { admingMenuItems } from '@/constants'
import logo from '@/assets/Logo.png'

export function AppSidebar() {
  const pathname = usePathname()

  const title = admingMenuItems.find(item => item.href === pathname)?.title

  if (!title) return null

  return (
    <nav className='flex relative left-0 right-auto bottom-0 flex-col w-60 border-r border-border h-screen p-4 bg-white'>
      <div className='hidden lg:flex items-center gap-x-3 mb-6 mt-4'>
        <Image
          src={logo}
          alt='admin logo'
          className='w-12 object-contain'
          width={60}
          height={60}
        />
        <h3 className='font-semibold text-2xl'>LedKing</h3>
      </div>
      <ul className='space-y-2 w-full lg:flex flex-1 flex-col h-full'>
        {admingMenuItems.map(item => (
          <li
            key={item.title}
            className='flex w-full items-center'
          >
            <Link
              href={item.href}
              className={cn(
                'flex w-full text-sm font-medium rounded-md items-center text-slate-600 gap-x-3 hover:text-indigo-900 hover:bg-indigo-50  hover:cursor-pointer py-2 px-6',
                pathname === item.href ? 'text-indigo-900 font-semibold' : '',
              )}
            >
              <item.icon className='size-4' />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
