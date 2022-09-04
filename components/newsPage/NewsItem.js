import Image from 'next/image'
import styles from '../../styles/News.module.scss'
import Markdown from 'markdown-to-jsx'

const NewsItem = ({ news }) => {
    return (
        <div className={styles.newsWrapper}>
            {news.map((newsItem, i) => (
                <div className={styles.NewsItem} id={`newsItem-${i}`} key={i}>
                    <div className={styles.contentContainer}>
                        <p className={styles.date}>{newsItem.date}</p>
                        <h4 className={styles.title}>{newsItem.title}</h4>
                        {newsItem.image && (
                            <div className={styles.imageContainer}>
                                <Image
                                    alt={newsItem.title}
                                    src={newsItem.image}
                                    quality={100}
                                    width={115}
                                    height={115}
                                    layout="responsive"
                                    objectFit='contain'
                                    objectPosition='center'
                                />
                            </div>
                        )}
                        <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                            {newsItem.body}
                        </Markdown>
                        {newsItem.files && (
                            newsItem.files.map((filesItem, i) => (
                                <div className="buttonWrapper" key={i}>
                                    <a href={filesItem.file} target="_blank" rel="noopener noreferrer">{filesItem.fileTitle}</a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsItem