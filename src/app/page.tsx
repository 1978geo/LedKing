import Image from 'next/image'
import logo from '@/assets/Logo.png'
import centerFloor from '@/assets/center-floor.png'
import { MenuDialog } from '@/components/menu-dialog'
import { MediaPlayer } from '@/components/media-player'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen relative'>
      <div className='block w-full h-1.5 bg-gradient-to-r from-white via-[#fcd448] to-[#0230d6]' />
      <section className='py-6 flex items-center justify-center xl:justify-start xl:py-14 xl:container xl:mx-auto w-full'>
        <Image
          src={logo}
          alt='logo'
          width={156}
          height={129}
          className='w-[98] h-[82px] xl:w-[156px] xl:h-[129px] xl:ml-10 z-10 object-contain'
          priority
        />
      </section>

      <div className='flex flex-col xl:flex-row-reverse xl:items-start xl:container flex-1 xl:mx-auto'>
        <div className='container mx-auto flex-1 shrink-0'>
          <AspectRatio
            ratio={16 / 9}
            className='border-3 border-white/90 rounded-sm overflow-hidden mx-5 mb-8 border-b-gold border-t-white/90 border-l-white/90 border-r-white/90 drop-shadow-glow'
          >
            <MediaPlayer
              source='LEDKING.mp4'
              muted
              controls
              autoPlay
              className='object-cover w-full h-full'
            />
          </AspectRatio>
        </div>

        <section className='flex flex-col xl:flex-row xl:gap-4 w-full xl:max-w-[1366px] xl:flex-1 xl:shrink-1 mx-auto'>
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
