import useToggle from '@hooks/useToggleState';
import MobileModal from './MobileModal';
import Link from 'next/link'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
import styles from '../../styles/Footer.module.scss'

const MobileFooter = () => {
    const [showModal, setShowModal] = useToggle(false);
    const router = useRouter()
    const MobileNavigation = Links.Navigation
    const PRIMARY_PAGES = 3

    const icons = {
        house: faHouse,
        warehouse: faWarehouse,
        bicycle: faBicycle,
    }

    const MobileNav = MobileNavigation.pages.slice(0, PRIMARY_PAGES).map((page, i) => {
        const icon = icons[page.icon]

        return (
            <Link href={page.path} key={i}>
                <a className={router.pathname == page.path ? styles.active : ''}>
                    {icon ? (
                        <FontAwesomeIcon className={styles.mobileIcon} aria-label={page.title} icon={icon} />
                    ) : null}
                    <span className={styles.mobileLinkText}>{page.title}</span>
                </a>
            </Link>
        )
    })

    return (
        <footer className={`mobile-only ${styles.MobileFooterBar}`}>
            <div className={styles.mobileMenuWrapper}>
                {MobileNav}
                <button onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon
                        className={styles.mobileIcon}
                        aria-label={showModal == false ? MobileNavigation.openModal : MobileNavigation.closeModal}
                        icon={showModal == false ? faBars : faXmark}
                    />
                    <span className={styles.mobileLinkText}>
                        {showModal == false ? MobileNavigation.openModal : MobileNavigation.closeModal}
                    </span>
                </button>
                <MobileModal
                    show={showModal}
                    closeModal={() => setShowModal(false)}
                />
            </div>
        </footer>
    )
}

export default MobileFooter;