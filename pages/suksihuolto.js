import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'

const Skiis = ({ meta, hero, markdown }) => {
    return (
        <>
            <Meta meta={meta} />
            <section id="skiis">
                <Hero hero={hero} />
                <MarkdownBlock markdown={markdown} />
            </section>
        </>
    )
}

export default Skiis

export async function getStaticProps() {
    const skiis = await import(`../content/skiis.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: skiis.Hero.DesktopHeroImage,
                MobileHeroImage: skiis.Hero.MobileHeroImage,
                ImageAltText: skiis.Hero.ImageAltText,
                HeroTitle: skiis.Hero.HeroTitle,
            },
            markdown: {
                body: skiis.Markdown.body,
            },
            meta: {
                title: skiis.meta.title,
                description: skiis.meta.description,
                url: skiis.meta.url,
                image: skiis.meta.image,
            }
        },
    }
}