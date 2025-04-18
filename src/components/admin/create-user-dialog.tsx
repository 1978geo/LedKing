'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { CirclePlusIcon } from 'lucide-react'
import { CreateUserForm } from '../forms/create-user.form'

export function CreateUserDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          className='rounded-md cursor-pointer'
          variant='adminInverse'
        >
          <CirclePlusIcon className='size-5' /> New user
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>New user</DialogTitle>
          <DialogDescription>Create new user for the admin.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <CreateUserForm onSubmitAction={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
