import { useRouter } from 'next/router'
import styles from '../styles/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { scrollBtn } from '@utils/main'

const Hero = ({ hero }) => {
    const router = useRouter()
    console.log(router.pathname)

    return (
        <section id={styles.hero}>
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
            <div className={`${router.pathname === '/' ? `${styles.contentContainer}` : `${styles.contentAltContainer}`}`}>
                <div className={`${router.pathname === '/' ? `${styles.content}` : `${styles.contentAlt}`}`}>
                    {hero.HeroTitle && (
                        <h1>{hero.HeroTitle}</h1>
                    )}
                    {hero.HeroSubtitle && (
                        <h3>{hero.HeroSubtitle}</h3>
                    )}
                    {hero.CTA && hero.CTALink === 'yhteydenotto' && (
                        <div className="buttonWrapper">
                            <button className={`btn ${styles.heroBTN}`} scrollTo={hero.CTALink} onClick={scrollBtn}>{hero.CTA}</button >
                        </div>
                    )}
                    {hero.CTA && hero.CTALink != 'yhteydenotto' && (
                        <div className="buttonWrapper">
                            <Link href={hero.CTALink}>
                                <a className={`btn ${styles.heroBTN}`}>{hero.CTA}</a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}

export default Hero