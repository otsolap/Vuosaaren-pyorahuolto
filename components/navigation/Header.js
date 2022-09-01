import Image from 'next/image'
import Link from 'next/link'
import Links from '@content/site.json'
import styles from '../../styles/Header.module.scss'


const Header = () => {
    const { Header } = Links
    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.navContainer}`}>
                    <div className={styles.logoContainer}>
                        {Header.imageLogo && (
                            <div className={styles.logoImage}>
                                <Image
                                    src={Header.imageLogo}
                                    alt={Header.imageAlt}
                                    height={50}
                                    width={50}
                                    quality={100}
                                    objectFit='contain'
                                    objectPosition='center'
                                />
                            </div>
                        )}
                        <Link href="/"><a className={styles.noDecoration}>
                            <h1 className={styles.logo}>{Header.titleLogo}</h1>
                        </a>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header