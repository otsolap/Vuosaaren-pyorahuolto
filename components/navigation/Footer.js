import Image from 'next/image'
import FooterContent from '@content/site.json'
import styles from '../../styles/Footer.module.scss'
import useToggle from '@hooks/useToggleState'

const Footer = () => {
    const [faqs, setFaqs] = useToggle([faq.faqs])

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
                    <p className={styles.detailsTxt}>&copy; {FooterContent.Footer.Owner}</p>
                    <div className={styles.footerKultakammen}>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.kultakammen.fi">
                            <Image
                                src="/images/Kultakammen_white.png"
                                height={30}
                                width={30}
                                alt="Toteutuksen tehnyt Kultakammen.fi"
                                quality={100}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;