import './globals.css'
import 'normalize.css/normalize.css';
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Image from 'next/image'
import Script from 'next/script'
import style from './layout.module.css';
import gradientBg from '../../public/gradient_bg.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Night Of Entertainers Concert 01 ',
  description: 'Book your ticket now for the night of entertainers concert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className={style.bgWrap}>
            <Image
              src={gradientBg}
              alt='Gradient'
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
          <Header style={style} />
          {children}
          <footer className={style.footer}>
            <div className={style.footer_logo}>
              <Image src='/logo_white.png' width={100} height={100} alt='logo' />
              <p>
                <span>Night Of Entertainers</span>
                <span>Concert 0.1 </span></p>
            </div>
            <div className={style.socials}>
              <p>
                <span>Connect with us — </span>
                <span>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>facebook</title>
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                  </a>
                </span>
              </p>
            </div>
          </footer>
        </div>

        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="tU12D2"
        />
      </body>
    </html>
  )
}
