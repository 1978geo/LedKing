import Image from 'next/image'
import centerFloor from '@/assets/center-floor.png'
import leftBar from '@/assets/left-bar.png'
import dots from '@/assets/dots.png'
import { MenuDialog } from '@/components/menu-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { LedStrip } from '@/components/led-strip'
import { LedLogo } from '@/components/led-logo'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen relative bg-site-bg xl:overflow-hidden xl:h-screen xl:w-screen'>
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
            className='xl:perspective-[800px] 2xl:perspective-[1000px] perspective-origin-center mx-5 mb-8 xl:ml-6 xl:-mt-10 2xl:-mt-18'
          >
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/yyW4paANpV8?si=6NWnl_lS3h8RZ4X8'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              className='border border-transparent rounded-lg overflow-hidden object-cover w-full h-full xl:-rotate-y-[30deg] xl:-skew-y-[3deg] xl:-translate-x-[80px] xl:translate-y-[15px] 2xl:-skew-y-[3deg] 2xl:-rotate-y-[25deg]'
              style={{
                background:
                  'linear-gradient(to right, rgba(184, 39, 252, 1), rgba(44, 144, 252, 1), rgba(184, 253, 51, 1), rgba(254, 200, 55, 1), rgba(253, 24, 146, 1))',
                boxShadow:
                  '0 -1px 5px rgba(184, 39, 252, 0.3), 0 5px 10px rgba(44, 144, 252, 0.3), 0 5px 10px rgba(184, 253, 51, 0.3), 0 5px 20px rgba(254, 200, 55, 0.3), 0 5px 30px rgba(253, 24, 146, 0.3), 0 10px 40px rgba(184, 39, 252, 0.3), 0 20px 50px rgba(44, 144, 252, 0.3), 0 20px 50px rgba(184, 253, 51, 0.3), 0 20px 60px rgba(254, 200, 55, 0.3), 0 20px 80px rgba(253, 24, 146, 0.3), inset 0 0 5px rgba(184, 39, 252, 0.7), inset 0 0 10px rgba(44, 144, 252, 1), inset 0 0 10px rgba(184, 253, 51, 1), inset 0 0 20px rgba(254, 200, 55, 1), inset 0 0 30px rgba(253, 24, 146, 1)',
              }}
            ></iframe>
          </AspectRatio>
        </div>

        <section className='flex flex-col xl:flex-row xl:gap-4 w-full xl:max-w-[640px] mx-auto'>
          <div className='px-6 py-14 flex flex-col items-center justify-center xl:items-start bg-[rgba(171,168,187,0.2)] xl:rounded-2xl w-full overflow-hidden backdrop-blur-xl'>
            <div className='flex flex-col xl:flex-row max-w-[388px] xl:max-w-[640px]'>
              <h1
                className='
            text-white
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
          text-white
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
            text-white
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
            text-white
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
      <Footer />
    </div>
  )
}
