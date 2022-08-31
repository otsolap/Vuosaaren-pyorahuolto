import Image from 'next/image'
import styles from '../../styles/Benefits.module.scss'

const BenefitItem = ({ news }) => {
    return (
        <div className={styles.newsWrapper}>
            {news.map((newsItem, i) => (
                <div className={styles.benefitItem} id={`newsItem-${i}`} key={i}>
                    {newsItem.image && (
                        <div className={styles.imageContainer}>
                            <Image
                                alt={newsItem.title}
                                src={newsItem.image}
                                quality={100}
                                width={230}
                                height={230}
                                layout="responsive"
                                objectFit='contain'
                                objectPosition='center'
                            />
                        </div>
                    )}
                    <div className={styles.contentContainer}>
                        <h4 className={styles.title}>{newsItem.title}</h4>
                        <p className={styles.news}>{newsItem.news}</p>
                        {newsItem.file && (
                            <div className="buttonWrapper">
                                <a href="">Miten saada otsikko tähän?</a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BenefitItem