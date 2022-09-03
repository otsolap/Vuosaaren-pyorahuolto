import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Links from '@content/site.json'
import { useRouter } from 'next/router'
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

    const MobileModalLinks = Links.Navigation.pages.slice(AFTER_PRIMARY_PAGES).map((link, i) => {
        return (
            <li
                onClick={handleClick}
                className={`${styles.linkWrapper} ${router.asPath === link.path ? styles.active : ''}`}
                key={i}
            >
                <Link href={link.path} >
                    <a className={styles.link}>
                        <span className={styles.mobileLinkText}>{link.title}</span>
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