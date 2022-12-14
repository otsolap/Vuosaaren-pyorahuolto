import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Links from '@content/site.json'
import { useRouter } from 'next/router'
import { faNewspaper, faPersonSkiingNordic, faSnowflake, faScrewdriverWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/MobileModal.module.scss'
import useToggle from '@hooks/useToggleState'

const MobileModal = ({ show, closeModal }) => {
    const [isBrowser, setIsBrowswer] = useToggle(false);
    const router = useRouter()
    const AFTER_PRIMARY_PAGES = 3

    useEffect(() => {
        setIsBrowswer(true);
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        closeModal()
    }

    const icons = {
        fixer: faScrewdriverWrench,
        winter: faSnowflake,
        skiis: faPersonSkiingNordic,
        newspaper: faNewspaper,
        contact: faEnvelope,
    }

    const MobileModalLinks = Links.Navigation.pages.slice(AFTER_PRIMARY_PAGES).map((page, i) => {
        const icon = icons[page.icon]

        return (
            <li
                onClick={handleClick}
                className={`${styles.linkWrapper} ${router.asPath === page.path ? styles.active : ''}`}
                key={i}
            >
                <Link href={page.path} >
                    <a className={styles.link}>
                        {icon ? (
                            <FontAwesomeIcon className={styles.sidebarIcon} aria-label={page.title} icon={icon} />
                        ) : null}
                        <span className={styles.mobileLinkText}>{page.title}</span>
                    </a>
                </Link>
            </li>
        )
    })

    const modalComponent = show ? (
        <div tabIndex="-1" aria-hidden="true" aria-labelledby="Modal" id={styles.modal} className="mobile-only">
            <div className={styles.modalContent}>
                {MobileModalLinks}
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalComponent,
            document.getElementById('modal-root')
        )
    } else {
        return null
    }
}

export default MobileModal;