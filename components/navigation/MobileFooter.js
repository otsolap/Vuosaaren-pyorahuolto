import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
import styles from '../../styles/Footer.module.scss'

const MobileFooter = () => {
    const router = useRouter()
    const { Navigation } = Links

    return (
        <footer className={`mobile-only ${styles.NavigationBar}`}>
            <div className={styles.mobileMenuWrapper}>
                <Link href="/">
                    <a className={router.pathname == '/' ? styles.active : ''}>
                        <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.indexPage} icon={faHouse} />
                        <span className={styles.mobileLinkText}>{Navigation.indexPage}</span>
                    </a>
                </Link>
                <Link href="/pyorahuolto">
                    <a className={router.pathname == '/pyorahuolto' ? styles.active : ''}>
                        <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.pyorahuoltoPage} icon={faWarehouse} />
                        <span className={styles.mobileLinkText}>{Navigation.pyorahuoltoPage}</span>
                    </a>
                </Link>
                <Link href="/polkupyorat">
                    <a className={router.pathname == '/polkupyorat' ? styles.active : ''}>
                        <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.polkupyoratPage} icon={faBicycle} />
                        <span className={styles.mobileLinkText}>{Navigation.polkupyoratPage}</span>
                    </a>
                </Link>
                <Link href="/#yhteydenotto">
                    <a className={router.pathname == '/#yhteydenotto' ? styles.active : ''}>
                        <FontAwesomeIcon className={styles.mobileIcon} aria-label={Navigation.openModal} icon={faBars} />
                        <span className={styles.mobileLinkText}>{Navigation.openModal}</span>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default MobileFooter;