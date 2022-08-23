import React, { useState } from 'react'
import FooterColumnItem from './FooterColumnItem'
import styles from '../../styles/FAQ.module.scss'
import useToggle from '@hooks/useToggleState'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useToggle([faq.faqs])


    return (
        <section id={styles.faqSection}>
            <div className={`container ${styles.container}`}>
                <header className="sectionHeader">
                    <h2>{faq.sectionTitle}</h2>
                </header>
                <div className={styles.content}>
                    {faq.faqs.map((faq, i) => (
                        <FooterColumnItem
                            key={i}
                            {...faq}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq