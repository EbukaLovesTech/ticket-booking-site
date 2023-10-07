
import Image from 'next/image'
export default function Header({ style }) {
    return (
        <header className={style.header}>
            <div className={style.header_child}>
                <div>
                    <Image
                        src='/logo.png'
                        width={170}
                        height={170}
                        alt='Logo'
                    />
                </div>
            </div>
        </header>
    )
}