import React, { useEffect, useRef } from 'react'
import styles from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@hooks/useToggleState';

const FooterColumnCompany = ({ title, description, paymentList, open }) => {
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

    const paymentInfo = paymentList.map((payments, i) => {
        return (
            <div className={styles.paymentIMGContainer} key={i}>
                {payments.title === 'Ecster' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
                {payments.title === 'Eurocard' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
                {payments.title === 'Maestro' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
                {payments.title === 'Mastercard' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
                {payments.title === 'Visa' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
                {payments.title === 'Visa-Electron' ? (
                    <img src={payments.icon} alt={payments.title} className={styles.paymentIMG} />
                ) : (
                    ""
                )}
            </div>
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
                            <FontAwesomeIcon
                                className={styles.colIcon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown}
                            />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.colContent} ${styles.colContentDivider}` : `${styles.colContent}`} >
                        <p className={styles.colText}>{description}</p>
                        <div className={styles.paymentWrapper}>
                            {paymentInfo}
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default FooterColumnCompany