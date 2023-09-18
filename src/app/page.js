import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.main}>
      <div>
        <section className={style.intro_section} >
          <h1>NIGHT OF ENTERTAINERS CONCERT 0.1</h1>
          <div className={style.img_wrapper}>
            <Image
              src='/night_of_entertainers_concert.png'
              alt='Night of entertainers concert 0.1'
              width={800}
              height={800}
              priority
            />
          </div>
        </section>
        <section className={style.section_2}>
          <h2> Get Ready to Groove and Have a Blast at Our Concert!</h2>
          <Image
            src='/concert.jpg'
            alt='Crowds cheering and dancing at a concert'
            width={1920}
            height={800}
            priority
          />
        </section>
        <section className={style.ticket_section}>
          <h2>Choose Ticket Type</h2>
          <div className={style.tickets_type}>
            <div className={style.regular_ticket}>
              <div>
                <Image src='/regular.jpg' width={1280} height={1200} alt='Fan cheering at a show' />
              </div>
              <div className={style.ticket_details}>
                <p className={style.ticket}><b>Regular Ticket</b></p>
                <p>₦5,000</p>
                <Link href='/' className={style.book_ticket}>Book</Link>
              </div>
            </div>
            <div className={style.silver_ticket}>
              <div>
                <Image src='/silver.jpg' width={1280} height={1200} alt='Fans cheering at a concert' />
              </div>
              <div className={style.ticket_details}>
                <p className={style.ticket}>
                  <b>Silver Table</b>
                </p>
                <p>₦20,000</p>
                <Link href='/' className={style.book_ticket}>Book</Link>
              </div>
            </div>
            <div className={style.gold_ticket}>
              <div>
                <Image src='/gold.jpg' width={1280} height={1200} alt='Fans cheering at a concert' />
              </div>
              <div className={style.ticket_details}>
                <p className={style.ticket}><b>Gold Table</b></p>
                <p>₦50,000</p>
                <Link href='/' className={style.book_ticket}>Book</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main >
  )
}
