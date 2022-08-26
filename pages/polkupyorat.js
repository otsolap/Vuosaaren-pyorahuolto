import Meta from "@components/Meta"
import Hero from "@components/Hero"
import ThemeBlock from "@components/salesPage/ImageAndText"

const Polkupyorat = ({ meta, }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="polkupyorat">
            </main>
        </>
    )
}

export default Polkupyorat

export async function getStaticProps() {
    const sales = await import(`../content/sales.json`)

    return {
        props: {
            meta: {
                title: sales.meta.title,
                description: sales.meta.description,
                url: sales.meta.url,
                image: sales.meta.image
            },
            blocks: {
                blocks: sales.TextImageSection.blocks
            },
        }
    }
}