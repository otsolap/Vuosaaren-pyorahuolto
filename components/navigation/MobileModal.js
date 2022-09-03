import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Links from '@content/site.json'
import { useRouter } from 'next/router'
import styles from '../../styles/MobileModal.module.scss'
import useToggle from '@hooks/useToggleState'

const MobileModal = ({ show }) => {
    const [isBrowser, setIsBrowswer] = useToggle(false);
    const router = useRouter()
    const AFTER_PRIMARY_PAGES = 3

    useEffect(() => {
        setIsBrowswer(true);
    }, [])

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

    const modalComponent = show ? (
        <div tabIndex="-1" aria-hidden="true" aria-labelledby="Modal" className={`mobile-only ${styles.modal}`}>
            <div className={styles.ModalContent}>
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