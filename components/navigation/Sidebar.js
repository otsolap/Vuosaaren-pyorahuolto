import Link from 'next/link'
import Links from '@content/site.json'
import styles from '../../styles/Sidebar.module.scss'


const Sidebar = () => {
    const Navigation = Links.Navigation.pages.map((page, i) => {
        return (
            <li>
                <Link href={page.path}>
                    <a className="testi">
                        {page.title}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <aside id={styles.sidebar} className="desktop-only">
            <nav>
                <ul>
                    {Navigation}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;