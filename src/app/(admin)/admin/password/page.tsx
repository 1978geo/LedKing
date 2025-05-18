import { redirect } from 'next/navigation'
import { PageTitle } from '@/components/admin/page-title'
import { auth } from '@/lib/auth'
import { ChangePasswordForm } from '@/components/forms/change-password.form'

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    return redirect('/admin/login')
  }

  return (
    <div className='flex flex-col w-full'>
      <PageTitle title='Change Password' />
      <div className='flex flex-col w-full bg-white border border-border rounded-xl p-8 mt-6'>
        <div className='flex flex-col'>
          <ChangePasswordForm session={session} />
        </div>
      </div>
    </div>
  )
}
