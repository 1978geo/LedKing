import { Separator } from '@/components/ui/separator'
import { SearchIcon } from 'lucide-react'
import { getAllUsers } from '@/actions/users'
import { UserCard } from '@/components/admin/user-card'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { CreateUserDialog } from '@/components/admin/create-user-dialog'

export default async function UsersPage() {
  const session = await auth()

  if (!session?.user) {
    return redirect('/auth/login')
  }

  const users = await getAllUsers()

  return (
    <div className='flex flex-col w-full px-20'>
      <h2 className='text-xl'>All Users</h2>
      <p className='text-muted-foreground text-sm'>
        Add or remove members to the admin dashboard
      </p>
      <Separator className='my-8' />
      <div className='flex items-center justify-between gap-x-4'>
        <div className='flex items-center border border-border rounded-md px-2 w-full [&:has(input:focus)]:border-primary'>
          <SearchIcon className='size-5 text-muted-foreground' />
          <Input
            placeholder='Search users...'
            type='search'
            className='w-full border-none shadow-none focus-visible:ring-0 focus-visible:border-none'
          />
        </div>
        <div className='flex items-center'>
          <CreateUserDialog />
        </div>
      </div>

      <div className='flex flex-col gap-y-4 mt-8'>
        {users
          ?.filter(u => u.email !== session?.user?.email)
          ?.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              image={user.image}
              role={user.role}
              className='w-full border-b border-border pb-8 last-of-type:border-none'
            />
          ))}
      </div>
    </div>
  )
}
