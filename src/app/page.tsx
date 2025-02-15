import Image from 'next/image'
import logo from '@/assets/Logo.png'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='w-full h-1.5 bg-gradient-to-r from-white via-[#fcd448] to-[#0230d6]' />
      <section className='py-5 flex items-center justify-center'>
        <Image
          src={logo}
          alt='logo'
          width={80}
          height={80}
          className='size-26'
        />
      </section>
      <section className='md:px-5 flex flex-col md:flex-row items-center'>
        <div className='py-10 px-6 md:py-8 md:px-8 md:pb-10 flex flex-col items-center justify-center bg-[rgba(171,168,187,0.2)] md:rounded-md md:max-w-[354px] lg:max-w-[776px] overflow-hidden backdrop-blur'>
          <h1 className='text-[54px] md:text-5xl leading-[54px] font-semibold p-0 m-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]'>
            Ние Даваме
          </h1>
          <h2 className='text-8xl md:text-[84px] bg-gradient-to-r font-semibold p-0 m-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] border-b border-white/90 pb-0.5'>
            Живот
          </h2>
          <h2 className='text-6xl md:text-[54px] font-semibold p-0 m-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]'>
            на Вашите
          </h2>
          <h2 className='text-7xl md:text-[64px] bg-gradient-to-r font-semibold p-0 m-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]'>
            Реклами
          </h2>
          <p className='w-full my-4 md:px-2 md:py-1 text-wrap text-white/40 text-center text-sm md:text-left'>
            Външна видео LED-реклама. ТОП локации в София, Варна, Слънчев бряг и
            Несебър. Изработваме и видео клипове. Ние сме част от основателите и
            член на Асоциацията за дигитална външна реклама.
          </p>
          <Button
            variant='outline'
            className='w-full border-3 hover:bg-white/20 hover:cursor-pointer bg-transparent border-b-[#ffe7b6] border-t-white/90 border-l-white/90 border-r-white/90 h-[68px] text-2xl font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.7)] hover:text-[#ffe7b6]/60'
          >
            СТАРТИРАЙ ТУК
          </Button>
        </div>
      </section>
    </div>
  )
}
