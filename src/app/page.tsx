import Image from 'next/image'
import logo from '@/assets/Logo.png'
import bgDesktop from '@/assets/main-bg-desktop.png'
import bgMobile from '@/assets/main-bg-phone.png'
import { MenuDialog } from '@/components/menu-dialog'
import { MediaPlayer } from '@/components/media-player'

export default function Home() {
  return (
    <div className='w-full h-full relative'>
      <Image
        src={bgDesktop}
        alt='background'
        width={1920}
        height={1080}
        className='absolute top-0 left-0 z-0 bottom-0 right-0 object-contain hidden md:block'
      />
      <div className='flex flex-col min-h-screen'>
        <div className='w-full h-1.5 bg-gradient-to-r from-white via-[#fcd448] to-[#0230d6] md:hidden' />
        <section className='py-5 lg:py-10 flex items-center justify-center md:justify-start w-full max-w-[1400px] mx-auto'>
          <Image
            src={logo}
            alt='logo'
            width={80}
            height={80}
            className='size-26 md:ml-10 z-10'
            priority
          />
        </section>
        <section className='md:px-5 flex flex-col md:flex-row md:gap-4 w-full max-w-[1400px] mx-auto'>
          <div className='p-6 md:p-[42px] md:pb-10 flex flex-col items-center justify-center lg:items-start bg-[rgba(171,168,187,0.2)] md:rounded-md w-full overflow-hidden backdrop-blur-xl flex-1 shrink max-w-[778px]'>
            <div className='flex flex-col lg:flex-row'>
              <h1
                className='
            text-[clamp(14vw,14.5vw,15vw)]
            leading-[clamp(14vw,14.5vw,15vw)]
            md:text-[clamp(6.5vw,7vw,7.5vw)]
            md:leading-[clamp(6.5vw,7vw,7.5vw)]
            lg:text-[clamp(4vw,4.6vw,5vw)]
            lg:leading-[clamp(4vw,4.6vw,5vw)]
            xl:text-[64px]
            xl:leading-[64px]
            lg:inline-block
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            lg:mr-2.5'
              >
                Ние Даваме
              </h1>
              <h2
                className='
            text-[clamp(25vw,25.5vw,26vw)]
            leading-[clamp(25vw,25.5vw,26vw)]
            md:text-[clamp(12vw,12.5vw,13vw)]
            md:leading-[clamp(12vw,12.5vw,13vw)]
            lg:text-[clamp(4vw,4.6vw,5vw)]
            lg:leading-[clamp(4vw,4.6vw,5vw)]
            xl:text-[60px]
            xl:leading-[60px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            lg:inline-block
            border-b-2
            border-white/90'
              >
                Живот
              </h2>
            </div>
            <div className='flex flex-col lg:flex-row'>
              <h2
                className='
            text-[clamp(16vw,16.5vw,17vw)]
            leading-[clamp(16vw,16.5vw,17vw)]
            md:text-[clamp(7.5vw,8vw,8.5vw)]
            md:leading-[clamp(7.5vw,8vw,8.5vw)]
            lg:text-[clamp(4vw,4.5vw,5vw)]
            lg:leading-[clamp(4vw,4.5vw,5vw)]
            xl:text-[60px]
            xl:leading-[60px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            lg:inline-block
            lg:mr-2.5'
              >
                на Вашите
              </h2>
              <h2
                className='
            text-[clamp(19vw,19.5vw,20vw)]
            leading-[clamp(19vw,19.5vw,20vw)]
            md:text-[clamp(9vw,9.5vw,10vw)]
            md:leading-[clamp(9vw,9.5vw,10vw)]
            lg:text-[clamp(4vw,4.5vw,5vw)]
            lg:leading-[clamp(4vw,4.5vw,5vw)]
            xl:text-[60px]
            xl:leading-[60px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            lg:inline-block'
              >
                Реклами
              </h2>
            </div>

            <p className='w-full my-4 md:px-2 md:py-1 text-wrap text-white/40 text-center text-sm md:text-left'>
              Външна видео LED-реклама. ТОП локации в София, Варна, Слънчев бряг
              и Несебър. Изработваме и видео клипове. Ние сме част от
              основателите и член на Асоциацията за дигитална външна реклама.
            </p>
            <MenuDialog />
          </div>
          <div className='flex-1 relative w-screen overflow-hidden'>
            <Image
              src={bgMobile}
              alt='background'
              width={1920}
              height={1080}
              className='md:hidden '
            />
            <div className='absolute perspective-[700px] perspective-origin-center w-[130%] h-[330px] top-[15%] -left-[5%] z-10'>
              <MediaPlayer
                source='LEDKING.mp4'
                autoPlay
                className='h-full w-full object-cover rounded-[10px]'
                style={{
                  transform: 'rotateY(-40deg) skewY(-7.5deg) translateX(-25%)',
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
