'use client'

export function Footer() {
  return (
    <footer className='fixed bottom-0 w-full flex items-center justify-center text-muted-foreground text-xs py-4'>
      <p>&copy;{new Date().getFullYear()} LEDKing.bg - Всички права запазени</p>
    </footer>
  )
}
