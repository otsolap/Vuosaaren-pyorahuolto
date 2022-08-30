import Meta from "@components/Meta"
import ImageAndText from "@components/salesPage/ImageAndText"
import BenefitList from "@components/salesPage/BenefitList"
import MarkdownBlock from "@components/MarkdownBlock"
import Highlight from "@components/salesPage/Highlight"

const Polkupyorat = ({ meta, blocks, benefits, markdown, highlight }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="polkupyorat">
                <ImageAndText blocks={blocks} />
                <BenefitList benefits={benefits} />
                <MarkdownBlock markdown={markdown} />
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
            markdown: {
                body: sales.textSection.body,
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