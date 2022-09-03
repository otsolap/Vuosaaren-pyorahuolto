import Link from 'next/link'
import Links from '@content/site.json'
import { useRouter } from 'next/router'
import styles from '../../styles/MobileModal.module.scss'

const MobileModal = () => {
    const router = useRouter()
    const AFTER_PRIMARY_PAGES = 3

    const MobileModalLinks = Links.Navigation.pages.slice(AFTER_PRIMARY_PAGES).map((link, i) => {
        return (
            <li key={i}>
                <Link href={link.path} >
                    <a className={router.pathname == link.path ? styles.active : ''}>
                        <span className={styles.mobileLinkText}>{link.title}</span>
                    </a>
                </Link>
            </li>
        )
    })

    console.log(MobileModalLinks)

    return (
        <div className={`mobile-only ${styles.NavigationBar}`}>
            <div className={styles.mobileMenuWrapper}>
                {MobileModalLinks}
                <Link href="#">
                    <a>
                        <span className={styles.mobileLinkText}>{Links.Navigation.openModal}</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default MobileModal;