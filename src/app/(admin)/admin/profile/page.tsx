import { redirect } from 'next/navigation'
import { PageTitle } from '@/components/admin/page-title'
import { auth } from '@/lib/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { CameraIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { MyProfileForm } from '@/components/forms/my-profile.form'

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    return redirect('/admin/login')
  }

  return (
    <div className='flex flex-col w-full'>
      <PageTitle title='My Profile' />
      <div className='flex flex-col w-full bg-white border border-border rounded-xl p-8 mt-6'>
        <div className='size-28 rounded-full flex items-center justify-center relative overflow-hidden'>
          <Avatar className='size-28'>
            <AvatarImage
              src={session.user.image}
              alt='User profile picture'
            />
            <AvatarFallback className='text-6xl'>
              {session.user.name?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className='absolute bottom-0 left-0 w-full h-8 flex items-center justify-center bg-black/70'>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-transparent cursor-pointer'
            >
              <CameraIcon className='size-4.5 text-white' />
            </Button>
          </div>
        </div>

        <Separator className='my-6' />

        <div className='flex flex-col space-y-4'>
          <h2 className='text-2xl'>Contact Details</h2>

          <MyProfileForm />
        </div>
      </div>
    </div>
  )
}
