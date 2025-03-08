import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '../ui/button'

export function SubmitButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        'h-14 bg-gradient-to-r from-50% from-primary-purple to-secondary-purple text-md font-semibold mx-auto mb-5 px-10 cursor-pointer hover:opacity-90 uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
