import React, { useState } from 'react'
import Question from './Question'
import styles from '../../styles/FAQ.module.scss'

const Faq = ({ faq }) => {
    const [faqs, setFaqs] = useState([faq.faqs])

    return (
        <section id={styles.faqSection}>
            <div className={`container ${styles.container}`}>
                <header className="sectionHeader">
                    <h2>{faq.sectionTitle}</h2>
                </header>
                <div className={styles.content}>
                    {faq.faqs.map((faq, i) => (
                        <Question
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