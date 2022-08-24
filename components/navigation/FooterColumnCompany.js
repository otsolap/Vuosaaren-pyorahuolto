import React, { useEffect, useRef } from 'react'
import styles from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@hooks/useToggleState';

const FooterColumnCompany = ({ title, address, postalCode, mapCTAtitle, mapURL, openingHoursTitle, openingHoursWeekDays, openingHoursWeekend, open }) => {
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

    return (
        <button className={styles.footerColButton} onClick={toggleAccordion}>
            <div className={styles.footerColContent}>
                <div className={active ? `${styles.colOpen}` : `${styles.colClosed}`}>
                    <div className={styles.colFlexBox}>
                        <h4 className={styles.faqQuestionHeading}>
                            {title}
                        </h4>
                        <FontAwesomeIcon
                            className={styles.colIcon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown}
                        />
                    </div>
                </div>
                <div ref={contentRef} className={active ? `${styles.faqAnswer} ${styles.faqAnswerDivider}` : `${styles.faqAnswer}`} >
                    <p className={styles.faqAnswerText}>{address}</p>
                </div>
            </div>
        </button >
    )
}

export default FooterColumnCompany