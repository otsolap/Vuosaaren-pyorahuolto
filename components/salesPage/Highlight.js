import React from 'react'
import styles from '../../styles/Highlight.module.scss'
import Image from 'next/image'

const Highlight = ({ highlight }) => {
    return (
        <section className={`container ${styles.highlightSection}`}>
            <div className={styles.highlightContent}>
                {highlight.image && (
                    <div className={styles.highlightImageContainer}>
                        <Image
                            src={highlight.image}
                            alt={highlight.quotee}
                            width={1440}
                            height={500}
                            layout='responsive'
                            objectFit='cover'
                            objectPosition='center'
                            quality={100}
                        />
                    </div>
                )}
                <div className={styles.highlightQuotation}>
                    <h2>{highlight.quote}</h2>
                    <h3>{highlight.quotee}</h3>
                </div>
            </div>
        </section>
    )
}

export default Highlight;