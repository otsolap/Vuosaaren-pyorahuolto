import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faUserTie, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Footer.module.scss'

const MobileFooter = () => {
    const { Navigation } = Links

    return (
        <footer className={`mobile-only ${styles.MobileFooterBar}`}>
            <div className={styles.mobileMenuWrapper}>
                <Link href="/"><a>
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.homeTitle} icon={faHouse} />
                    <span className={styles.mobileLinkText}>{Navigation.homeTitle}</span></a>
                </Link>
                <Link href="/juho">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.aboutMeTitle} icon={faUserTie} />
                        <span className={styles.mobileLinkText}>{Navigation.aboutMeTitle}</span></a>
                </Link>
                <Link href="/#yhteydenotto">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.contactTitle} icon={faEnvelopeOpenText} />
                        <span className={styles.mobileLinkText}>{Navigation.contactTitle}</span></a>
                </Link>
            </div>
        </footer>
    )
}

export default MobileFooter;