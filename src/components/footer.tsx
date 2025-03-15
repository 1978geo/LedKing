'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className='fixed bottom-0 w-full flex items-center justify-center gap-x-4 text-muted-foreground text-xs py-4'>
      <p>&copy;{new Date().getFullYear()} LEDKing.bg - Всички права запазени</p>
      <div className='text-[#a4a4a7] text-xs flex items-center gap-x-4'>
        <Link
          href='/terms'
          className='underline'
        >
          Общи условия
        </Link>
        <Link
          href='/contacts'
          className='underline'
        >
          Контакти
        </Link>
      </div>
    </footer>
  )
}
