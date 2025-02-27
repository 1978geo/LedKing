import { UseFormReturn } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { cn } from '@/lib/utils'

interface CampaignCheckboxProps {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>
  name: string
  checked: boolean
}

export function CampaignCheckbox({
  label,
  checked,
  form,
  name,
}: CampaignCheckboxProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        field.value = form.getValues(`${name}`)
        const _change = field.onChange

        return (
          <FormItem
            className={cn(
              'flex flex-row items-center min-w-max space-x-3 space-y-0 h-9 pl-3 rounded-full border border-slate-400 mb-2.5',
              checked && 'bg-primary-purple/20 border-primary-purple',
            )}
          >
            <FormControl>
              <Checkbox
                {...field}
                onCheckedChange={checked => {
                  _change(checked)
                }}
                checked={checked}
              />
            </FormControl>
            <FormLabel className='text-muted-foreground inline-flex items-center gap-1'>
              {label}
            </FormLabel>
          </FormItem>
        )
      }}
    />
  )
}
