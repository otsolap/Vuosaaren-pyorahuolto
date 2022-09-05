import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@content/site.json'
import styles from '../../styles/Header.module.scss'


const Header = () => {
    const { Logo } = Navigation
    return (
        <>
            {Logo.imageLogo && (
                <header className={styles.header}>
                    <div className="container">
                        <div className={styles.logoContainer}>
                            <div className={styles.logoImage}>
                                <Image
                                    src={Logo.imageLogo}
                                    alt={Logo.imageAlt}
                                    height={50}
                                    width={50}
                                    quality={100}
                                    objectFit='contain'
                                    objectPosition='center'
                                />
                            </div>
                            {Logo.titleLogo && (
                                <Link href="/"><a className={styles.noDecoration}>
                                    <h1 className={styles.logo}>{Logo.titleLogo}</h1>
                                </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header