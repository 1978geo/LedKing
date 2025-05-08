'use client'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CircleAlertIcon } from 'lucide-react'

export interface ConfirmModalProps {
  title: string
  text: string
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  title,
  text,
  open,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        if (!isOpen) onCancel()
      }}
    >
      <DialogContent className='max-w-sm'>
        <DialogHeader>
          <div className='flex items-center gap-x-2 mb-4'>
            <CircleAlertIcon className='size-6 text-amber-500' />
            <DialogTitle>{title}</DialogTitle>
          </div>
          <DialogDescription>{text}</DialogDescription>
        </DialogHeader>
        <DialogFooter className='flex justify-end gap-1'>
          <Button
            variant='adminOutline'
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            variant='adminDefault'
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
