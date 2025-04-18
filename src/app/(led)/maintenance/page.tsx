import MaintenanceLedForm from '@/components/forms/led-maintenance.form'

export default function MaintenancePage() {
  return (
    <div className='flex flex-col flex-1 h-full w-full max-w-7xl mx-auto'>
      <h2 className='text-center font-semibold text-2xl lg:text-3xl my-10'>
        Заявка за поддръжка на LED екран
      </h2>
      <MaintenanceLedForm />
    </div>
  )
}
