import Link from 'next/link'
import Image from 'next/image'
import Links from '@content/site.json'
import { faHouse, faWarehouse, faBicycle, faNewspaper, faPersonSkiingNordic, faSnowflake, faScrewdriverWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Sidebar.module.scss'
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter();

    const icons = {
        house: faHouse,
        warehouse: faWarehouse,
        bicycle: faBicycle,
        fixer: faScrewdriverWrench,
        winter: faSnowflake,
        skiis: faPersonSkiingNordic,
        newspaper: faNewspaper,
        contact: faEnvelope,
    }

    const Navigation = Links.Navigation.pages.map((page, i) => {
        const icon = icons[page.icon]

        return (
            <li className={`${styles.linkWrapper}  ${router.asPath === page.path ? styles.active : ''}`} key={i}>
                <Link href={page.path}>
                    <a className={styles.link}>
                        {icon ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={icon} />
                        ) : null}
                        {page.title}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <aside id={styles.sidebar}>
            <div className={styles.styledBlock}></div>
            <nav className={styles.fixedNav}>
                <ul className={styles.stickyUl}>
                    {Navigation}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;