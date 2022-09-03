import Link from 'next/link'
import Links from '@content/site.json'
import styles from '../../styles/Sidebar.module.scss'
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter();

    const Navigation = Links.Navigation.pages.map((page, i) => {
        return (
            <li className={styles.linkWrapper} key={i}>
                <Link href={page.path}>
                    <a className={`${styles.link}  ${router.asPath === page.path ? styles.active : ''}`}>
                        {page.title}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <aside id={styles.sidebar}>
            <nav>
                <ul className={styles.linkContainer}>
                    {Navigation}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;