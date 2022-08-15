import Image from 'next/image'
import Link from 'next/link'
import FooterContent from '@content/site.json'
import Icons from '@content/site.json'
import { faLinkedin, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    const SoMe = Icons.SocialMedia.socialMediaList.map((icons, i) => {
        return (
            <span className={styles.someIcons} key={i}>
                {icons.icon === 'Instagram' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Instagram profiili" icon={faInstagram} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Twitter' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Twitter profiili" icon={faTwitter} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'LinkedIn' ? (
                    <a href={icons.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="LinkedIn profiili" icon={faLinkedin} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Email' ? (
                    <a href={`mailto:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Sähköposti" icon={faEnvelope} />
                    </a>
                ) : (
                    ""
                )}
                {icons.icon === 'Phone' ? (
                    <a href={`tel:${icons.url}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-label="Puhelin" icon={faPhone} />
                    </a>
                ) : (
                    ""
                )}
            </span>
        )
    })

    return (
        <footer id={styles.Footer}>
            <div className={`container ${styles.footerPrimaryContainer}`}>
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
                <div className={styles.footerSoMEContainer}>
                    {SoMe}
                </div>
                <div className={styles.footerPropsitionContainer}>
                    <p>{FooterContent.Footer.valueProposition}</p>
                </div>
            </div>
            <div className={styles.footerSubContainer}>
                <div className={styles.subDesktopContainer}>
                    <p className={styles.detailsTxt}>&copy; {FooterContent.Footer.Owner}</p>
                    <Link href="/tietosuojaseloste"><a className={styles.detailsTxt}>{FooterContent.Footer.privacyPolicy}</a></Link>
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