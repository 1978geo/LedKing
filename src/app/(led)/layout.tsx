import { LedLogo } from '@/components/led-logo'
import { LedStrip } from '@/components/led-strip'
import { MenuDialog } from '@/components/menu-dialog'
import { Navbar } from '@/components/navbar'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export default function LedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col flex-1 w-full min-h-screen bg-site-bg overflow-y-auto'>
      <header className='fixed z-60 top-0 left-0 right-0 flex flex-col bg-gradient-to-r from-[rgba(4,21,128,0.85)] to-[rgba(132,56,140,0.85)] backdrop-blur'>
        <LedStrip />
        <div className='flex items-center justify-between px-5 py-3 lg:container lg:mx-auto'>
          <LedLogo />
          <div className='lg:hidden'>
            <MenuDialog
              trigger={
                <button className='flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none'>
                  <MenuIcon className='size-9 text-[#b8ffff]' />
                </button>
              }
            />
          </div>
          <Navbar className='hidden lg:flex' />
        </div>
      </header>
      <main className='flex flex-col flex-1 overflow-x-hidden bg-white mt-[72px] lg:mt-[88px]'>
        {children}
      </main>
      <footer className='h-16 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-1 bg-gradient-to-r from-[rgba(6,33,201,0.5)] to-[rgba(176,82,184,0.5)]'>
        <p className='text-muted-foreground text-xs'>
          &copy; LEDKing.bg - Всички права запазени.
        </p>
        <div className='text-[#a4a4a7] text-xs flex items-center gap-x-4'>
          <Link
            href='/'
            className='underline'
          >
            Общи условия
          </Link>
          <Link
            href='/'
            className='underline'
          >
            Контакти
          </Link>
        </div>
      </footer>
    </div>
  )
}
