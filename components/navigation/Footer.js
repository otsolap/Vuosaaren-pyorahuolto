import Image from 'next/image'
import FooterContent from '@content/site.json'
import styles from '../../styles/Footer.module.scss'
import FooterColumnCompany from './FooterColumnCompany'
import FooterColumnContact from './FooterColumnContact'


const Footer = () => {
    return (
        <footer id={styles.Footer}>
            <div className={`container ${styles.footerHeader}`}>
                {FooterContent.Footer.logoImage && (
                    <div className={styles.footerLogoContainer}>
                        <Image
                            src={FooterContent.Footer.logoImage}
                            alt={FooterContent.Footer.logoAlt}
                            width={100}
                            height={100}
                            quality={100}
                            layout="responsive"
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                )}
            </div>
            <div className={styles.columnContainer}>
                <FooterColumnContact {...FooterContent.Footer.FooterContact} />
                <FooterColumnCompany {...FooterContent.Footer.FooterCompany} />
            </div>
        </footer>
    )
}

export default Footer;