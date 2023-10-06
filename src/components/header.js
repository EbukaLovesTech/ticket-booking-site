
import Image from 'next/image'
export default function Header({ style }) {
    return (
        <header className={style.header}>
            <div className={style.header_child}>
                <div>
                    <Image
                        src='/logo.png'
                        width={120}
                        height={120}
                        alt='Logo'
                    />
                </div>
            </div>
        </header>
    )
}