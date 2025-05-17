'use client'

import { CameraIcon, LoaderIcon, SendIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useState, useTransition } from 'react'
import { updateUserPhoto } from '@/actions/users'
import { toast } from 'sonner'

export function ProfileImage() {
  const { data: session } = useSession()
  const [url, setUrl] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()

  const handlePhotoChange = async () => {
    if (!session?.user.id) return

    startTransition(async () => {
      try {
        await updateUserPhoto(session.user.id!, url)
        setUrl('')
        setIsOpen(false)
        toast.success('Profile photo updated successfully.')
      } catch (error) {
        console.error('Error updating profile photo:', error)
        toast.error(
          'An error occurred while updating the profile photo. Please try again.',
        )
      }
    })
  }

  return (
    <div className='size-28 rounded-full flex items-center justify-center relative overflow-hidden'>
      <Avatar className='size-28'>
        <AvatarImage
          src={session?.user.image}
          alt='User profile picture'
        />
        <AvatarFallback className='text-6xl'>
          {session?.user.name?.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div className='absolute bottom-0 left-0 w-full h-8 flex items-center justify-center bg-black/70'>
        <Dialog
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DialogTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-transparent cursor-pointer'
            >
              <CameraIcon className='size-4.5 text-white' />
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-sm'>
            <DialogHeader>
              <DialogTitle>Change profile photo</DialogTitle>
              <DialogDescription>
                Paste the URL of the new profile photo below.
              </DialogDescription>
            </DialogHeader>
            <div className='flex flex-col gap-y-2'>
              <Label htmlFor='url'>Image URL</Label>
              <div className='flex items-center gap-x-2 flex-1'>
                <Input
                  id='url'
                  type='url'
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  className='shadow-none rounded-md'
                />
                <Button
                  variant='adminDefault'
                  size='icon'
                  className='rounded-md cursor-pointer shrink-0'
                  onClick={handlePhotoChange}
                  disabled={isPending || !url}
                >
                  {isPending ? (
                    <LoaderIcon className='size-4 animate-spin' />
                  ) : (
                    <SendIcon className='size-4 text-white' />
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
