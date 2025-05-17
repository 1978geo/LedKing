import { redirect } from 'next/navigation'
import { PageTitle } from '@/components/admin/page-title'
import { auth } from '@/lib/auth'
import { Separator } from '@/components/ui/separator'
import { MyProfileForm } from '@/components/forms/my-profile.form'
import { ProfileImage } from '@/components/admin/profile-image'

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    return redirect('/admin/login')
  }

  return (
    <div className='flex flex-col w-full'>
      <PageTitle title='My Profile' />
      <div className='flex flex-col w-full bg-white border border-border rounded-xl p-8 mt-6'>
        <ProfileImage />

        <Separator className='my-6' />

        <div className='flex flex-col space-y-4'>
          <h2 className='text-2xl'>Profile Details</h2>

          <MyProfileForm session={session} />
        </div>
      </div>
    </div>
  )
}
