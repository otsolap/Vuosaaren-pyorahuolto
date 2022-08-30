import styles from '../styles/Hero.module.scss'
import Image from 'next/image'

const Hero = ({ hero }) => {
    return (
        <section id={styles.hero}>
            {hero.DesktopHeroImage && (
                <div className={`desktop-only ${styles.imageContainer}`}>
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
            {hero.MobileHeroImage && (
                <div className={`mobile-only ${styles.imageContainer}`}>
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
            {hero.HeroTitle && (
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <h1>{hero.HeroTitle}</h1>
                    </div>
                </div>
            )}
        </section >
    )
}

export default Hero