import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'

const Contact = ({ meta, hero, markdown }) => {
    return (
        <>
            <Meta meta={meta} />
            <section id="contact">
                <Hero hero={hero} />
                <MarkdownBlock markdown={markdown} />
            </section>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    const contact = await import(`../content/contact.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: contact.Hero.DesktopHeroImage,
                MobileHeroImage: contact.Hero.MobileHeroImage,
                ImageAltText: contact.Hero.ImageAltText,
                HeroTitle: contact.Hero.HeroTitle,
            },
            markdown: {
                body: contact.Markdown.body,
            },
            meta: {
                title: contact.meta.title,
                description: contact.meta.description,
                url: contact.meta.url,
                image: contact.meta.image,
            }
        },
    }
}