import { useRouter } from 'next/router'
import styles from '../styles/Hero.module.scss'
import Image from 'next/image'

const Hero = ({ hero }) => {
    const router = useRouter()
    console.log(router.pathname)

    return (
        <section id={styles.hero}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    {hero.HeroTitle && (
                        <h1>{hero.HeroTitle}</h1>
                    )}
                </div>
            </div>
            <div className="desktop-only">
                {hero.DesktopHeroImage && (
                    <div style={{ position: 'absolute', width: '100%', overflow: 'hidden', inset: '0', }}>
                        <Image
                            src={hero.DesktopHeroImage}
                            alt={hero.heroTitle}
                            layout="fill"
                            objectFit='cover'
                            objectPosition='center'
                            quality={100}
                        />
                    </div>
                )}
            </div>
            {hero.MobileHeroImage && (
                <div
                    style={{ position: 'relative', width: '100%', height: '270px', overflow: 'hidden' }}
                    className="mobile-only">
                    <Image
                        src={hero.MobileHeroImage}
                        alt={hero.heroTitle}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center center'
                        quality={100}
                    />
                </div>
            )}
        </section >
    )
}

export default Hero