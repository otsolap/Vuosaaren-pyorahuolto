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
                {FooterContent.logoImage && (
                    <div className={styles.footerLogoContainer}>
                        <Image
                            src={FooterContent.logoImage}
                            alt={FooterContent.logoAlt}
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
                <FooterColumnContact {...FooterContent.Contact} />
                <FooterColumnPayment {...FooterContent.Payment} />
                <FooterColumnCompany {...FooterContent.Company} />
                <div className={styles.madeByKultakammen}>
                    <a
                        rel="noreferrer" 
                        href="/kultakammen">
                        <Image
                            src="/images/Kultakammen_white.png"
                            height={30}
                            width={30}
                            alt="Toteutuksen tehnyt Kultakammen.fi"
                            quality={100}
                        />
                    <span class="sr-only">
                        
                    </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;