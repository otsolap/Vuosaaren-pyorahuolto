import Image from 'next/image'
import FooterContent from '@content/site.json'
import styles from '../../styles/Footer.module.scss'

const Footer = () => {

    return (
        <footer id={styles.Footer}>
            <div className={`container ${styles.footerHeader}`}>
                {FooterContent.Footer.desktopLogoImage && (
                    <div className={`desktop-only ${styles.footerDesktopLogoContainer}`}>
                        <Image
                            src={FooterContent.Footer.desktopLogoImage}
                            alt={FooterContent.Footer.desktopLogoAlt}
                            width={250}
                            height={100}
                            quality={100}
                            layout="responsive"
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                )}
            </div>
            <div className={styles.footerSubContainer}>
                <div className={styles.subDesktopContainer}>

                </div>
            </div>
        </footer>
    )
}

export default Footer;