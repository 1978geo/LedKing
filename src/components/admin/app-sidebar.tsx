'use client'

import { LogOutIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { admingMenuItems } from '@/constants'
import logo from '@/assets/Logo.png'
import { Separator } from '@/components/ui/separator'

export function AppSidebar() {
  const pathname = usePathname()

  function isActivePath(href: string): boolean {
    const middlePath = href.split('/')[2]
    return pathname.includes(middlePath) || pathname === href
  }

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
                'flex w-full text-sm font-medium rounded-md items-center text-slate-600 gap-x-3 hover:text-blue-700 hover:bg-indigo-50  hover:cursor-pointer py-2 px-6',
                isActivePath(item.href) ? 'text-blue-700 bg-indigo-50' : '',
              )}
            >
              <item.icon className='size-4' />
              {item.title}
            </Link>
          </li>
        ))}

        <Separator className='mb-4 mt-auto' />

        <li>
          <button
            onClick={() => signOut()}
            className={cn(
              'flex w-full text-sm font-medium rounded-md items-center text-slate-600 gap-x-3 hover:text-blue-700 hover:bg-indigo-50  hover:cursor-pointer py-2 px-6',
            )}
          >
            <LogOutIcon className='size-4' />
            Log out
          </button>
        </li>
      </ul>
    </nav>
  )
}
