import React, { useEffect, useRef } from 'react'
import styles from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@hooks/useToggleState';

const FooterColumnCompany = ({ title, description, contactList, open }) => {
    const contentRef = useRef(null)
    const [active, setActive] = useToggle(open);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    const contactInfo = contactList.map((contacts, i) => {
        return (
            <p className={styles.contactText} key={i}>
                {contacts.title === 'Email' ? (
                    <a className={styles.contactLink} href={`mailto:${contacts.url}`} target="_blank" rel="noopener noreferrer">
                        {contacts.title}: {contacts.url}
                    </a>
                ) : (
                    ""
                )}
                {contacts.title === 'Puhelin' ? (
                    <a className={styles.contactLink} href={`tel:${contacts.url}`} target="_blank" rel="noopener noreferrer">
                        {contacts.title}: {contacts.url}
                    </a>
                ) : (
                    ""
                )}
            </p>
        )
    })

    return (
        <div className={styles.footerColumn}>
            <button className={styles.footerColButton} onClick={toggleAccordion}>
                <div className={styles.footerColContent}>
                    <div className={active ? `${styles.colOpen}` : `${styles.colClosed}`}>
                        <div className={styles.colFlexBox}>
                            <h4 className={styles.colHeading}>
                                {title}
                            </h4>
                            <FontAwesomeIcon className={styles.colIcon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.colContent} ${styles.colContentDivider}` : `${styles.colContent}`} >
                        {description && (<p className={styles.colText}>{description}</p>)}
                        {contactInfo}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default FooterColumnCompany