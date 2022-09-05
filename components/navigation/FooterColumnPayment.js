import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
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
                {payments ? (
                    <Image src={payments.icon} alt={payments.title} className={styles.paymentIMG} height={48} width={48} layout='responsive' quality={100} objectFit="contain" />
                ) : null}
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
                            <FontAwesomeIcon className={styles.colIcon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.colContent} ${styles.colContentDivider}` : `${styles.colContent}`} >
                        {description && (<p className={styles.colText}>{description}</p>)}
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