import Image from 'next/image'
import styles from '../../styles/References.module.scss'

const ReferenceItem = ({ referees }) => {
    return (
        <div className={styles.references}>
            {referees.map((reference, i) => (
                <div className={styles.referenceItem} id={`refence-item-${i}`} key={i}>
                    {reference.image && (
                        <div className={styles.imageContainer}>
                            <Image
                                alt={reference.referee}
                                src={reference.image}
                                width={160}
                                height={160}
                                quality={100}
                                layout="responsive"
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </div>
                    )}
                    <div className={`${styles.referenceBuble}  ${i % 2 === 0 ? `${styles.even}` : `${styles.odd}`}`}>
                        <p className={styles.referenceQuote}>&ldquo;{reference.reference}&ldquo;</p>
                        <h4 className={styles.referee}>{reference.referee}</h4>
                        <p className={styles.refereeWorkTitle}>{reference.refereeTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReferenceItem