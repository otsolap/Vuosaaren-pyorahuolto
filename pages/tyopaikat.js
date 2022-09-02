import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'

const Jobs = ({ meta, hero, markdown }) => {
    return (
        <>
            <Meta meta={meta} />
            <section id="jobs">
                <Hero hero={hero} />
                <MarkdownBlock markdown={markdown} />
            </section>
        </>
    )
}

export default Jobs

export async function getStaticProps() {
    const jobs = await import(`../content/jobs.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: jobs.Hero.DesktopHeroImage,
                MobileHeroImage: jobs.Hero.MobileHeroImage,
                ImageAltText: jobs.Hero.ImageAltText,
                HeroTitle: jobs.Hero.HeroTitle,
            },
            markdown: {
                body: jobs.Markdown.body,
            },
            meta: {
                title: jobs.meta.title,
                description: jobs.meta.description,
                url: jobs.meta.url,
                image: jobs.meta.image,
            }
        },
    }
}