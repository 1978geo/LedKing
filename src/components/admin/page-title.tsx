interface PageTitleProps {
  title: string
  subtitle?: string
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className='flex flex-col pl-4'>
      <h1 className='text-2xl'>{title}</h1>
      {subtitle && <p className='text-muted-foreground text-sm'>{subtitle}</p>}
    </div>
  )
}
