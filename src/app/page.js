import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import localFont from 'next/font/local'
const myFont = localFont({
  src: './font/tiltwarp.ttf',
})
export default function Home() {
  return (
    <main className={style.main}>
      <div>
        <section className={style.intro_section} >
          <h1 className={myFont.className}>NIGHT OF ENTERTAINERS CONCERT 0.1</h1>
          <div className={style.banner_wrapper}>
            <Image
              src='/concert_banner.jpeg'
              alt='Night of entertainers concert banner'
              width={800}
              height={800}
              priority
            />
          </div>
        </section>
        <section className={`${style.section_2} ${myFont.className}`}>
          <h2> Live On Stage!</h2>
          <ul className={style.list}>
            <li>Uwaezuoke</li>
            <li>Chi Machine</li>
            <li>Some K</li>
            <li>Ice Berry</li>
            <li>Dj Feelings</li>
            <li>Dj Chignent</li>
            <li>Water Money</li>
          </ul>
        </section>
        <section className={style.ticket_section}>
          <h2 className={myFont.className}>Ticket Categories</h2>
          <div className={style.tickets_type}>
            <div className={style.regular_ticket}>
              <div>
                <Image src='/regular.jpg' width={1280} height={1200} alt='Fan cheering at a show' />
              </div>
              <div className={style.ticket_details}>
                <p className={style.ticket}><b>Regular Ticket</b></p>
                <p>₦5,000</p>
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
                <p>₦30,000</p>
              </div>
            </div>
            <div className={style.gold_ticket}>
              <div>
                <Image src='/gold.jpg' width={1280} height={1200} alt='Fans cheering at a concert' />
              </div>
              <div className={style.ticket_details}>
                <p className={style.ticket}><b>Gold Table</b></p>
                <p>₦50,000</p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.event_details}>
          <h2 className={myFont.className}>Concert Date and Venue</h2>
          <div className={style.map_section}>
            <div className={style.details}>
              <p>Date: 30th Dec 2023</p>
              <p>Venue: Cm Comfort Hotel And Suites Awkuzu</p>
            </div>
            <div className={style.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1620134696827!2d6.93712757402618!3d6.242367893745954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104385b46847a9e1%3A0x15441a473a259e4f!2scm%20comfort%20hotel%20%26%20suites%20limited!5e0!3m2!1sen!2sng!4v1696611030893!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </div>
    </main >
  )
}
