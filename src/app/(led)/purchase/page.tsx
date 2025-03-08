import BuyLedForm from '@/components/forms/led-buy.form'

export default function PurchasePage() {
  return (
    <div className='flex flex-col flex-1 h-full w-full max-w-7xl mx-auto'>
      <h2 className='text-center font-semibold text-2xl lg:text-3xl my-10'>
        Заявка за закупуване на LED екран
      </h2>
      <BuyLedForm />
    </div>
  )
}
