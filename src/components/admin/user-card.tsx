import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EllipsisIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface UserCardProps {
  className?: string
  name: string | null
  email: string
  image: string | null
  role: 'ADMIN' | 'USER' | 'SUPERADMIN'
}

export function UserCard({
  className,
  name,
  email,
  image,
  role,
}: UserCardProps) {
  return (
    <div className={cn('w-full flex items-center gap-x-4', className)}>
      <Avatar className='size-12'>
        <AvatarImage
          src={image ?? '/avatars/01.png'}
          alt='avatar photo'
        />
        <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center gap-x-2'>
          <p className='text-md font-medium leading-none'>{name}</p>
          <Badge
            variant={role.toLowerCase() as 'superadmin' | 'admin' | 'user'}
          >
            {role.toLocaleLowerCase()}
          </Badge>
        </div>
        <p className='text-xs leading-none text-muted-foreground'>{email}</p>
      </div>

      <Button
        variant='ghost'
        size='icon'
        className='ml-auto rounded-md cursor-pointer'
      >
        <EllipsisIcon className='size-6 text-muted-foreground' />
      </Button>
    </div>
  )
}
