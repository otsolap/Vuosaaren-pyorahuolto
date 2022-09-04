import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'
import List from '@components/repairPage/List'

const Pyorahuolto = ({ meta, hero, services, nonPricedServices }) => {
    return (
        <>
            <Meta meta={meta} />
            <section id="pyorahuolto">
                <Hero hero={hero} />
                <List lists={services} />
                <MarkdownBlock markdown={services} />
                <MarkdownBlock markdown={nonPricedServices} />
            </section>
        </>
    )
}

export default Pyorahuolto

export async function getStaticProps() {
    const repair = await import(`../content/repair.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: repair.Hero.DesktopHeroImage,
                MobileHeroImage: repair.Hero.MobileHeroImage,
                ImageAltText: repair.Hero.ImageAltText,
                HeroTitle: repair.Hero.HeroTitle,
            },
            services: {
                body: repair.Services.body,
                lists: repair.Services.lists
            },
            nonPricedServices: {
                body: repair.nonPricedServices.body,
            },
            meta: {
                title: repair.meta.title,
                description: repair.meta.description,
                url: repair.meta.url,
                image: repair.meta.image,
            }
        },
    }
}