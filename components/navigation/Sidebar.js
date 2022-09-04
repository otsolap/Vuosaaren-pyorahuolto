import Link from 'next/link'
import Image from 'next/image'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faNewspaper, faPersonSkiingNordic, faSnowflake, faScrewdriverWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Sidebar.module.scss'
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter();

    const Navigation = Links.Navigation.pages.map((page, i) => {
        return (
            <li className={`${styles.linkWrapper}  ${router.asPath === page.path ? styles.active : ''}`} key={i}>
                <Link href={page.path}>
                    <a className={styles.link}>
                        {page.icon === 'house' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faHouse} />
                        ) : null}
                        {page.icon === 'warehouse' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faWarehouse} />
                        ) : null}
                        {page.icon === 'bicycle' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faBicycle} />
                        ) : null}
                        {page.icon === 'fixer' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faScrewdriverWrench} />
                        ) : null}
                        {page.icon === 'winter' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faSnowflake} />
                        ) : null}
                        {page.icon === 'skiis' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faPersonSkiingNordic} />
                        ) : null}
                        {page.icon === 'newspaper' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faNewspaper} />
                        ) : null}
                        {page.icon === 'contact' ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={faEnvelope} />
                        ) : null}
                        {page.title}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <aside id={styles.sidebar}>
            <nav className={styles.fixedNav}>
                <ul className={styles.stickyUl}>
                    {Navigation}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;