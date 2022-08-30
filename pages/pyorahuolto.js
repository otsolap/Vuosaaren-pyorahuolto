import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'
import List from '@components/repairPage/List'

const Pyorahuolto = ({ meta, hero, services, nonPricedServices }) => {
    return (
        <>
            <Meta meta={meta} />
            <main id="pyorahuolto">
                <Hero hero={hero} />
                <MarkdownBlock markdown={services} />
                <List lists={services} />
                <MarkdownBlock markdown={nonPricedServices} />
            </main>
        </>
    )
}

export default Pyorahuolto

export async function getStaticProps() {
    const repair = await import(`../content/pyorahuolto.json`)

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