import React from 'react'
import styles from '../../styles/Highlight.module.scss'
import Image from 'next/image'

const Highlight = ({ highlight }) => {
    return (
        <section className={styles.Highlight}>
            <div className={styles.highlightContent}>
                <div className={styles.highlightImageContainer}>
                    <Image
                        src={highlight.image}
                        alt={highlight.quotee}
                        width={600}
                        height={265}
                        layout='responsive'
                        objectFit='contain'
                        objectPosition='center'
                        quality={100}
                    />
                </div>
                <div className={styles.highlightQuotation}>
                    <p>{highlight.quotee}</p>
                    <h2>{highlight.quotee}</h2>
                </div>
            </div>
        </section>
    )
}

export default Highlight;