import NewsItem from "./NewsItem";
import styles from '../../styles/News.module.scss'

const newsList = ({ news }) => {
    return (
        <section id={styles.newsSection}>
            <div className="container">
                <header className="sectionHeader">
                    <h2>{news.sectionTitle}</h2>
                </header>
                <div className="news-container">
                    <div className="newsItem-container">
                        <NewsItem
                            news={news.news}
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default newsList;