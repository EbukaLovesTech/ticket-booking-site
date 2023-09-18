import Link from 'next/link'
import Image from 'next/image'
export default function Header({ style }) {
    return (
        <header className={style.header}>
            <div className={style.header_child}>
                <div>
                    <Image
                        src='/black_logo.png'
                        width={120}
                        height={120}
                        alt='Logo'
                    />
                </div>
                <Link href='/' className={style.ticket_link}>Get Tickets</Link>
            </div>
        </header>
    )
}