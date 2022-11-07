import React from "react"
import Hero from "@components/Hero"
import Meta from "@components/Meta"
import MarkdownBlock from "@components/MarkdownBlock"

const Honeypaw = ({ meta, hero, markdown }) => {
    return (
        <>
             <Meta meta={meta} />
            <section id="honeypaw">
               <Hero hero={hero} />
               <MarkdownBlock markdown={markdown} />
            </section>
        </>
    )
}

export default Honeypaw

export async function getStaticProps() {
    const credits = await import(`../content/credits.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: credits.Hero.DesktopHeroImage,
                MobileHeroImage: credits.Hero.MobileHeroImage,
                HeroTitle: credits.Hero.HeroTitle,
            },
            markdown: {
                body: credits.Markdown.body,
            },
            meta: {
                title: credits.meta.title,
                description: credits.meta.description,
                url: credits.meta.url,
                image: credits.meta.image
            },
        }
    }
}