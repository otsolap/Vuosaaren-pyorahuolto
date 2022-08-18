import Image from 'next/image'
import Link from 'next/link'
import Links from '@content/site.json'
import styles from '../../styles/Header.module.scss'


const Header = () => {
    const { Navigation } = Links
    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.navContainer}`}>
                    <div className={styles.logoContainer}>
                        <Link href="/"><a className={styles.noDecoration}>
                            <h1 className={styles.logo}>{Navigation.titleLogo}</h1>
                        </a>
                        </Link>
                        {Navigation.imageLogo && (
                            <div className={styles.logoImage}>
                                <Image
                                    src={Navigation.imageLogo}
                                    alt={Navigation.imageAlt}
                                    height={50}
                                    width={50}
                                    quality={100}
                                    objectFit='contain'
                                    objectPosition='center'
                                />
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header