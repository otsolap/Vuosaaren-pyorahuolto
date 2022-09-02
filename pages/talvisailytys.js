import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'

const Winter = ({ meta, hero, markdown }) => {
    return (
        <>
            <Meta meta={meta} />
            <section id="winter">
                <Hero hero={hero} />
                <MarkdownBlock markdown={markdown} />
            </section>
        </>
    )
}

export default Winter

export async function getStaticProps() {
    const winter = await import(`../content/winter.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: winter.Hero.DesktopHeroImage,
                MobileHeroImage: winter.Hero.MobileHeroImage,
                ImageAltText: winter.Hero.ImageAltText,
                HeroTitle: winter.Hero.HeroTitle,
            },
            markdown: {
                body: winter.Markdown.body,
            },
            meta: {
                title: winter.meta.title,
                description: winter.meta.description,
                url: winter.meta.url,
                image: winter.meta.image,
            }
        },
    }
}