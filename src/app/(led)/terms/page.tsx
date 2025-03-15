import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className='max-w-7xl mx-auto px-5 flex flex-col gap-y-7 text-primary-text'>
      <h1 className='text-center my-10 font-bold text-4xl lg:text-5xl text-black'>
        Общи Условия
      </h1>

      <p className='text-primary-purple'>
        Добре дошли в{' '}
        <Link
          href='/'
          className='underline'
        >
          LEDKing.bg
        </Link>
        ! Моля, прочетете внимателно настоящите Общи условия, преди да
        използвате нашия уебсайт. С достъпа и използването на{' '}
        <Link
          href='/'
          className='underline'
        >
          LEDKing.bg
        </Link>
        , Вие се съгласявате с настоящите условия.
      </p>

      <section className='flex flex-col'>
        <h3 className='font-bold'>1. ОБЩИ ПОЛОЖЕНИЯ</h3>
        <span>
          1.1. Настоящите Общи условия уреждат отношенията между{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>
          („ние“, „нашият уебсайт“) и потребителите („Вие“, „Клиентът“).
        </span>
        <span>
          1.2.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          предоставя онлайн платформа за продажба на LED екрани, рекламни
          кампании и свързани продукти.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>2. РЕГИСТРАЦИЯ И ЛИЧНИ ДАННИ</h3>
        <span>
          2.1. Регистрацията в сайта не е задължителна за извършване на покупка,
          но предоставя допълнителни предимства.
        </span>
        <span>
          2.2. При регистрация Вие се задължавате да предоставите вярна и
          актуална информация.
        </span>
        <span>
          2.3.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          обработва личните данни съгласно Политиката за поверителност.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>3. ПОРЪЧКИ И ДОСТАВКА</h3>
        <span>
          3.1. Поръчките се извършват чрез онлайн платформата на{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>
          .
        </span>
        <span>
          3.2. След направена поръчка ще получите потвърждение на посочения от
          Вас имейл.
        </span>
        <span>
          3.3. Рекламни услуги, доставки и монтаж на оборудване се извършват
          след допълнително подписване на договор и анекс, по условията
          договорени в тях.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>4. ЦЕНИ И ПЛАЩАНЕ</h3>
        <span>
          4.1. Всички цени в сайта са в български лева и не включват ДДС.
        </span>
        <span>
          4.2.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          си запазва правото да променя цените без предизвестие.
        </span>
        <span>
          4.3. Плащането може да се извърши чрез наложен платеж, банков превод
          или друга налична платежна услуга.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>5. ВРЪЩАНЕ И ГАРАНЦИЯ</h3>
        <span>
          5.1. Клиентът има право да върне закупените услуги и продукти според
          уговорените параметри в допълнително подписаните договор и анекс.
        </span>
        <span>
          5.2. Върнатите продукти трябва да бъдат в оригиналната си опаковка и
          неизползвани.
        </span>
        <span>
          5.3. Някои продукти са с гаранция, която е посочена в описанието на
          съответния артикул.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>6. ОТГОВОРНОСТ</h3>
        <span>
          6.1.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          не носи отговорност за забавяне или неизпълнение на поръчка поради
          независещи от нас причини (форсмажорни обстоятелства).
        </span>
        <span>
          6.2.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          не носи отговорност за евентуални технически грешки, свързани със
          сайта.
        </span>
      </section>

      <section className='flex flex-col'>
        <h3 className='font-bold'>7. ИЗМЕНЕНИЯ НА ОБЩИТЕ УСЛОВИЯ</h3>
        <span>
          7.1.{' '}
          <Link
            href='/'
            className='underline'
          >
            LEDKing.bg
          </Link>{' '}
          си запазва правото да променя настоящите Общи условия без
          предварително уведомление.
        </span>
        <span>
          7.2. Изменените условия влизат в сила от датата на публикуването им на
          сайта.
        </span>
      </section>

      <section className='flex flex-col mb-20'>
        <h3 className='font-bold'>8. КОНТАКТИ</h3>
        <span>
          Ако имате въпроси или нужда от допълнителна информация, можете да се
          свържете с нас на:
        </span>
        <ul>
          <li>- Имейл: office@ledking.bg</li>
          <li>- Телефон: 0897 93 73 55</li>
          <li>- Адрес: КК “СЛЪНЧЕВ БРЯГ” 8240, алея “Кубан” сграда “Кая”</li>
        </ul>
      </section>
    </div>
  )
}
