import RentLedForm from '@/components/forms/led-rent.form'

export default function RentPage() {
  return (
    <div className='flex flex-col flex-1 h-full w-full max-w-7xl mx-auto'>
      <h2 className='text-center font-semibold text-2xl lg:text-3xl my-10'>
        Заявка за LED екран под наем
      </h2>
      <RentLedForm />
    </div>
  )
}
