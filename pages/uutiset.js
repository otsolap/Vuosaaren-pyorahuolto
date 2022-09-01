import Meta from "@components/Meta"
import NewsList from "@components/newsPage/NewsList"
import Hero from "@components/Hero"

const Uutiset = ({ meta, hero, news }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="uutiset">
                <Hero hero={hero} />
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
            hero: {
                DesktopHeroImage: news.Hero.DesktopHeroImage,
                MobileHeroImage: news.Hero.MobileHeroImage,
                ImageAltText: news.Hero.ImageAltText,
                HeroTitle: news.Hero.HeroTitle,
            },
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