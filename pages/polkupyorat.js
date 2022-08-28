import Meta from "@components/Meta"
import ImageAndText from "@components/salesPage/ImageAndText"
import BenefitList from "@components/salesPage/BenefitList"
import Highlight from "@components/salesPage/Highlight"

const Polkupyorat = ({ meta, blocks, benefits, highlight }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="polkupyorat">
                <ImageAndText blocks={blocks} />
                <BenefitList benefits={benefits} />
                <Highlight highlight={highlight} />
            </main>
        </>
    )
}

export default Polkupyorat

export async function getStaticProps() {
    const sales = await import(`../content/polkupyorat.json`)

    return {
        props: {
            blocks: {
                blocks: sales.TextImageSection.blocks
            },
            benefits: {
                sectionTitle: sales.BenefitsSection.SectionTitle,
                benefits: sales.BenefitsSection.benefits
            },
            highlight: {
                quotee: sales.highlightSection.quotee,
                quote: sales.highlightSection.quote,
                image: sales.highlightSection.image
            },
            meta: {
                title: sales.meta.title,
                description: sales.meta.description,
                url: sales.meta.url,
                image: sales.meta.image
            },
        }
    }
}