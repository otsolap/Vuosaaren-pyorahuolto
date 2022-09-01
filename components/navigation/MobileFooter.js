import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
import styles from '../../styles/Footer.module.scss'

const MobileFooter = () => {
    const router = useRouter()
    const length = 3

    const MobileNav = Links.Navigation.pages.slice(0, length).map((link, i) => {
        return (
            <Link href={link.path} key={i}>
                <a className={router.pathname == link.path ? styles.active : ''}>
                    <span className={styles.mobileLinkText}>{link.title}</span>
                </a>
            </Link>
        )
    })

    return (
        <footer className={`mobile-only ${styles.NavigationBar}`}>
            <div className={styles.mobileMenuWrapper}>
                {MobileNav}
                <Link href="#">
                    <a>
                        <span className={styles.mobileLinkText}>{Links.Navigation.openModal}</span>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default MobileFooter;