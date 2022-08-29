import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'

const Pyorahuolto = () => {
    return (
        <>
            <Meta meta={meta} />
            <main id="pyorahuolto">
                <Hero hero={hero} />
            </main>
        </>
    )
}

export default Pyorahuolto

export async function getStaticProps() {
    const repair = await import(`../content/polkupyorat.json`)

    return {
        props: {
            meta: {
                title: repair.meta.title,
                description: repair.meta.description,
                url: repair.meta.url,
                image: repair.meta.image,
            },
            hero: {
                DesktopHeroImage: repair.Hero.DesktopHeroImage,
                MobileHeroImage: repair.Hero.MobileHeroImage,
                ImageAltText: repair.Hero.ImageAltText,
                HeroTitle: repair.Hero.HeroTitle,
            },
        }
    }
}