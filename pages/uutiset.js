import Meta from "@components/Meta"
import NewsList from "@components/newsPage/NewsList"

const Uutiset = ({ meta, news }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="uutiset">
                <NewsList news={news} />
            </main>
        </>
    )
}

export default Uutiset

export async function getStaticProps() {
    const news = await import(`../content/news.json`)

    return {
        props: {
            news: {
                sectionTitle: news.newsSection.SectionTitle,
                news: news.newsSection.news
            },
            meta: {
                title: news.meta.title,
                description: news.meta.description,
                url: news.meta.url,
                image: news.meta.image,
            }
        }
    }

}