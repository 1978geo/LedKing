import Image from 'next/image'
import centerFloor from '@/assets/center-floor.png'
import leftBar from '@/assets/left-bar.png'
import dots from '@/assets/dots.png'
import { MenuDialog } from '@/components/menu-dialog'
import { MediaPlayer } from '@/components/media-player'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { LedStrip } from '@/components/led-strip'
import { LedLogo } from '@/components/led-logo'

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen relative'>
      <Image
        src={leftBar}
        alt='background'
        width={1920}
        height={1080}
        className='hidden md:block object-contain w-70 h-auto fixed top-1.5 left-0'
        priority
      />
      <Image
        src={dots}
        alt='background'
        width={1920}
        height={1080}
        className='hidden md:block object-contain w-[280px] h-auto fixed top-40 -right-8 left-auto'
        priority
      />
      <LedStrip />
      <section className='py-6 flex items-center justify-center xl:justify-start xl:py-14 xl:container xl:mx-auto w-full'>
        <LedLogo />
      </section>

      <div className='flex flex-col xl:flex-row-reverse xl:items-start xl:container xl:mx-auto'>
        <div className='container relative xl:max-w-auto mx-auto xl:mx-0 flex-1 shrink-0 pb-4 xl:pb-0'>
          <AspectRatio
            ratio={16 / 9}
            className='xl:perspective-[800px] 2xl:perspective-[1000px] perspective-origin-center mx-5 mb-8 xl:ml-6 xl:-mt-10 2xl:-mt-18 z-1'
          >
            <MediaPlayer
              source='LEDKING.mp4'
              controls
              muted
              autoPlay
              loop
              playsInline
              className='border border-transparent rounded-sm overflow-hidden object-cover w-full h-full xl:-rotate-y-[30deg] xl:-skew-y-[3deg] xl:-translate-x-[80px] 2xl:-skew-y-[3deg] 2xl:-rotate-y-[25deg] z-10'
              style={{
                background:
                  'linear-gradient(to right, rgba(184, 39, 252, 1), rgba(44, 144, 252, 1), rgba(184, 253, 51, 1), rgba(254, 200, 55, 1), rgba(253, 24, 146, 1))',
                boxShadow:
                  '0 -1px 5px rgba(184, 39, 252, 0.3), 0 5px 10px rgba(44, 144, 252, 0.3), 0 5px 10px rgba(184, 253, 51, 0.3), 0 5px 20px rgba(254, 200, 55, 0.3), 0 5px 30px rgba(253, 24, 146, 0.3), 0 10px 40px rgba(184, 39, 252, 0.3), 0 20px 50px rgba(44, 144, 252, 0.3), 0 20px 50px rgba(184, 253, 51, 0.3), 0 20px 60px rgba(254, 200, 55, 0.3), 0 20px 80px rgba(253, 24, 146, 0.3), inset 0 0 5px rgba(184, 39, 252, 0.7), inset 0 0 10px rgba(44, 144, 252, 1), inset 0 0 10px rgba(184, 253, 51, 1), inset 0 0 20px rgba(254, 200, 55, 1), inset 0 0 30px rgba(253, 24, 146, 1)',
              }}
            />
          </AspectRatio>
        </div>

        <section className='flex flex-col xl:flex-row xl:gap-4 w-full xl:max-w-[640px] mx-auto'>
          <div className='px-6 py-10 flex flex-col items-center justify-center xl:items-start bg-[rgba(171,168,187,0.2)] xl:rounded-md w-full overflow-hidden backdrop-blur-xl'>
            <div className='flex flex-col xl:flex-row max-w-[388px] xl:max-w-[640px]'>
              <h1
                className='
            text-[58px]
            leading-[58px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            xl:mr-2.5
            xl:inline-block
            xl:text-[62px]
            xl:leading-[62px]
            '
              >
                Ние Даваме
              </h1>
              <h2
                className='
            text-[104px]
            leading-[104px]
            font-semibold
            p-0
            pb-2
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            border-b-2
          border-white/90
            xl:inline-block
            xl:text-[62px]
            xl:leading-[62px]
            '
              >
                Живот
              </h2>
            </div>
            <div className='flex flex-col xl:flex-row'>
              <h2
                className='
            text-[66px]
            leading-[66px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            xl:inline-block
            xl:mr-2.5
            xl:text-[60px]
            xl:leading-[60px]
            '
              >
                на Вашите
              </h2>
              <h2
                className='
            text-[78px]
            leading-[78px]
            font-semibold
            p-0
            m-0
            drop-shadow-text
            bg-gradient-to-r
            from-white
            to-gold
            bg-clip-text
            xl:inline-block
            xl:text-[60px]
            xl:leading-[60px]
            '
              >
                Реклами
              </h2>
            </div>

            <p className='w-full my-4 xl:px-2 xl:py-1 text-wrap text-white/40 text-center text-sm xl:text-left max-w-[388px] xl:max-w-[778px]'>
              Външна видео LED-реклама. ТОП локации в София, Варна, Слънчев бряг
              и Несебър. Изработваме и видео клипове. Ние сме част от
              основателите и член на Асоциацията за дигитална външна реклама.
            </p>
            <div className='w-full max-w-[388px] xl:max-w-[778px] mx-auto xl:mx-0'>
              <MenuDialog />
            </div>
          </div>
        </section>
      </div>
      <div className='flex-1 relative w-screen'>
        <Image
          src={centerFloor}
          alt='background'
          width={1920}
          height={1080}
          className='object-cover w-full h-full'
          priority
        />
      </div>
      <footer className='w-full flex items-center justify-center text-muted-foreground text-xs py-4'>
        <p>
          &copy;{new Date().getFullYear()} LEDKing.bg - Всички права запазени
        </p>
      </footer>
    </div>
  )
}
