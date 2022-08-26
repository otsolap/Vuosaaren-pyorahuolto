import Meta from "@components/Meta"
import ImageAndText from "@components/salesPage/ImageAndText"
import BenefitList from "@components/salesPage/BenefitList"

const Polkupyorat = ({ meta, blocks, benefits }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="polkupyorat">
                <ImageAndText blocks={blocks} />
                <BenefitList benefits={benefits} />
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
            meta: {
                title: sales.meta.title,
                description: sales.meta.description,
                url: sales.meta.url,
                image: sales.meta.image
            },
        }
    }
}