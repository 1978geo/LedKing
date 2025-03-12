'use client'

import Image from 'next/image'
import logo from '@/assets/Logo.png'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LedLogoProps {
  className?: string
}

export function LedLogo({ className }: LedLogoProps) {
  return (
    <Link href='/'>
      <Image
        src={logo}
        alt='logo'
        width={156}
        height={129}
        className={cn(
          'w-[60px] h-[42px] lg:w-[76px] lg:h-[58px] xl:ml-10 z-10 object-contain',
          className,
        )}
        priority
      />
    </Link>
  )
}
