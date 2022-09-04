import Image from 'next/image'
import FooterContent from '@content/site.json'
import styles from '../../styles/Footer.module.scss'
import FooterColumnCompany from './FooterColumnCompany'
import FooterColumnContact from './FooterColumnContact'
import FooterColumnPayment from './FooterColumnPayment'


const Footer = () => {
    return (
        <footer id={styles.Footer}>
            <div className={`container ${styles.footerHeader}`}>
                {FooterContent.Information.logoImage && (
                    <div className={styles.footerLogoContainer}>
                        <Image
                            src={FooterContent.Information.logoImage}
                            alt={FooterContent.Information.logoAlt}
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
                <FooterColumnContact {...FooterContent.Information.Contact} />
                <FooterColumnPayment {...FooterContent.Information.Payment} />
                <FooterColumnCompany {...FooterContent.Information.Company} />
            </div>
        </footer>
    )
}

export default Footer;