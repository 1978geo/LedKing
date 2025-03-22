import LedContactsForm from '@/components/forms/led-contacts.form'

export default function ContactsPage() {
  return (
    <div className='flex flex-col flex-1 h-full w-full max-w-7xl mx-auto'>
      <div className='flex justify-between flex-col lg:flex-row w-full px-4 my-10 lg:my-14'>
        <h2 className='text-center font-semibold text-2xl lg:text-4xl'>
          Контакти
        </h2>
        <div className='flex flex-col gap-y-1 text-xs text-primary-purple mt-6 mx-auto lg:mt-0 lg:mx-0'>
          <div className='grid grid-cols-[80px_1fr]'>
            <h3 className='font-semibold uppercase'>Email:</h3>
            <p>
              <a href='mailto:office@ledking.bg'>office@ledking.bg</a>
            </p>
          </div>
          <div className='grid grid-cols-[80px_1fr]'>
            <h3 className='font-semibold uppercase'>Телефон:</h3>
            <a href='tel:+359897937355'>(+359) 897 93 73 55</a>
          </div>
          <div className='grid grid-cols-[80px_1fr]'>
            <h3 className='font-semibold uppercase'>Адрес:</h3>
            <p className='max-w-[160px]'>
              КК. &quot;СЛЪНЧЕВ БРЯГ&quot; 8240, алея &quot;Кубан&quot; сграда
              &quot;Кая&quot;
            </p>
          </div>
        </div>
      </div>
      <LedContactsForm />
    </div>
  )
}
