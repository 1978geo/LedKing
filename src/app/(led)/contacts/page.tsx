import LedContactsForm from '@/components/forms/led-contacts.form'

export default function ContactsPage() {
  return (
    <div className='flex flex-col flex-1 h-full w-full max-w-7xl mx-auto'>
      <h2 className='text-center font-semibold text-2xl lg:text-3xl my-10'>
        Контакти
      </h2>
      <LedContactsForm />
    </div>
  )
}
