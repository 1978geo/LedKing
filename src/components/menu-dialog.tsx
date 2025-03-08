'use client'

import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  HandshakeIcon,
  MonitorPlayIcon,
  WalletIcon,
  WrenchIcon,
} from 'lucide-react'

interface MenuDialogProps {
  trigger?: React.ReactNode
}

export function MenuDialog({ trigger }: MenuDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={open => setOpen(open)}
    >
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant='outline'
            className='text-white hover:text-primary-purple w-full xl:w-[284px] border-3 hover:cursor-pointer hover:bg-white hover:border-b-white bg-transparent border-b-gold border-t-white/90 border-l-white/90 border-r-white/90 h-[68px] text-2xl font-semibold drop-shadow-text'
          >
            СТАРТИРАЙ ТУК
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='text-white/60 flex px-4 flex-col gap-y-4 bg-[rgba(171,168,187,0.3)]  backdrop-blur-xl w-[calc(100%-20px)] mx-auto rounded-md xl:max-w-xs border-transparent'>
        <DialogTitle></DialogTitle>
        <DialogDescription className='hidden'></DialogDescription>
        <Link
          href='/campaign'
          className='flex items-center gap-x-4 font-semibold py-2 px-4 hover:bg-white/50 hover:text-background/60 rounded-[8px]'
          onClick={() => setOpen(false)}
        >
          <MonitorPlayIcon className='size-6' />
          LED Кампания
        </Link>
        <Link
          href='/purchase'
          className='flex items-center gap-x-4 font-semibold py-2 px-4 hover:bg-white/50 hover:text-background/60 rounded-[8px]'
          onClick={() => setOpen(false)}
        >
          <HandshakeIcon className='size-6' />
          Покупка на LED
        </Link>
        <Link
          href='/rent'
          className='flex items-center gap-x-4 font-semibold py-2 px-4 hover:bg-white/50 hover:text-background/60 rounded-[8px]'
          onClick={() => setOpen(false)}
        >
          <WalletIcon className='size-6' />
          Наем на LED
        </Link>
        <Link
          href='/maintenance'
          className='flex items-center gap-x-4 font-semibold py-2 px-4 hover:bg-white/50 hover:text-background/60 rounded-[8px]'
          onClick={() => setOpen(false)}
        >
          <WrenchIcon className='size-6' />
          Поддръжка на LED
        </Link>
      </DialogContent>
    </Dialog>
  )
}
