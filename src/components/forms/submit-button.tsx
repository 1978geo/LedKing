import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '../ui/button'
import { LoaderIcon } from 'lucide-react'

interface SubmitButtonProps extends ButtonProps {
  loading?: boolean
}

export function SubmitButton({
  children,
  className,
  loading,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      className={cn(
        'h-14 bg-gradient-to-r from-50% from-primary-purple to-secondary-purple text-md font-semibold mx-auto mb-5 px-10 cursor-pointer hover:opacity-90 uppercase',
        className,
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <LoaderIcon className='text-white animate-spin' />} {children}
    </Button>
  )
}
