import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/FAQ.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Question = ({ answer, question, open }) => {
    const contentRef = useRef(null)
    const [active, setActive] = useState(open);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <button className={styles.faqButton} onClick={toggleAccordion}>
            <div className={styles.faq}>
                <div className={active ? `${styles.faqOpen}` : `${styles.faqClosed}`}>
                    <div className={styles.faqFlexBox}>
                        <h4 className={styles.faqQuestionHeading}>
                            {question}
                        </h4>
                        <FontAwesomeIcon
                            className={styles.faqIcon} aria-label="Usein kysytty kysymys" icon={active ? faAngleUp : faAngleDown}
                        />
                    </div>
                </div>
                <div ref={contentRef} className={active ? `${styles.faqAnswer} ${styles.faqAnswerDivider}` : `${styles.faqAnswer}`} >
                    <p className={styles.faqAnswerText}>{answer}</p>
                </div>
            </div>
        </button >
    )
}

export default Question