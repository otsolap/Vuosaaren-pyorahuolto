import Image from 'next/image'
import styles from '../../styles/News.module.scss'
import Markdown from 'markdown-to-jsx'

const NewsItem = ({ news }) => {
    return (
        <div className={styles.newsWrapper}>
            {news.map((newsItem, i) => (
                <div className={styles.NewsItem} id={`newsItem-${i}`} key={i}>
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
                        <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                            {newsItem.body}
                        </Markdown>
                        {newsItem.file && (
                            <div className="buttonWrapper">
                                <a href={newsItem.file} target="_blank" rel="noopener noreferrer">{newsItem.fileTitle}</a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsItem