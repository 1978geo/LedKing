import Image from 'next/image'
import logo from '@/assets/Logo.png'
import { cn } from '@/lib/utils'

interface LedLogoProps {
  className?: string
}

export function LedLogo({ className }: LedLogoProps) {
  return (
    <Image
      src={logo}
      alt='logo'
      width={156}
      height={129}
      className={cn(
        'w-[76] h-[60px] md:w-[94px] md:h-[76px] xl:w-[156px] xl:h-[129px] xl:ml-10 z-10 object-contain',
        className,
      )}
      priority
    />
  )
}
