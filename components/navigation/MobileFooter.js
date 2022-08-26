import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Footer.module.scss'

const MobileFooter = () => {
    const { Navigation } = Links

    return (
        <footer className={`mobile-only ${styles.MobileFooterBar}`}>
            <div className={styles.mobileMenuWrapper}>
                <Link href="/"><a>
                    <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.indexPage} icon={faHouse} />
                    <span className={styles.mobileLinkText}>{Navigation.indexPage}</span></a>
                </Link>
                <Link href="/pyorahuolto">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.pyorahuoltoPage} icon={faWarehouse} />
                        <span className={styles.mobileLinkText}>{Navigation.pyorahuoltoPage}</span></a>
                </Link>
                <Link href="/polkupyorat">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.polkupyoratPage} icon={faBicycle} />
                        <span className={styles.mobileLinkText}>{Navigation.polkupyoratPage}</span></a>
                </Link>
                <Link href="/#yhteydenotto">
                    <a><FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.openModal} icon={faBars} />
                        <span className={styles.mobileLinkText}>{Navigation.openModal}</span></a>
                </Link>
            </div>
        </footer>
    )
}

export default MobileFooter;