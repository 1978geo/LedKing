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
    <nav className='fixed bottom-6 left-5 right-5 flex lg:relative lg:left-0 lg:right-auto lg:bottom-0 lg:flex-col lg:w-60 lg:border-r lg:border-border lg:h-screen lg:p-4'>
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
      <ul className='hidden space-y-2 w-full lg:flex flex-1 flex-col h-full'>
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
                  ? 'border-l-primary bg-blue-100/80 text-primary'
                  : '',
              )}
            >
              <item.icon className='size-5' />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className='lg:hidden max-w-screen w-auto mx-auto h-full p-2 rounded-full overflow-hidden bg-slate-950/25 backdrop-blur flex items-center justify-between gap-x-1'>
        {admingMenuItems
          .filter(item => item.href !== '/admin/settings')
          .map(item => (
            <li
              key={item.title}
              className='flex items-center justify-center rounded-full'
            >
              <Link
                href={item.href}
                className={cn(
                  'text-white/70 flex items-center justify-center size-11 rounded-full ',
                  pathname === item.href ? 'bg-white text-slate-600' : '',
                )}
              >
                <item.icon className='size-5' />
                <span className='hidden lg:inline'>{item.title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
