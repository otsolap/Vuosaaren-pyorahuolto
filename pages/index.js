import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import BenefitList from '@components/landingPage/BenefitList'
import Script from 'next/script'

const Index = ({ meta, hero, blocks, benefits, }) => {
  const router = useRouter()

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            router.push(/admin/)
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Meta
        meta={meta}
      />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <main id="home">
        <Hero
          hero={hero}
        />
        <ImageAndText blocks={blocks} />
        <BenefitList benefits={benefits} />
      </main>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const home = await import(`../content/home.json`)
  const site = await import(`../content/site.json`)

  return {
    props: {
      meta: {
        title: home.meta.title,
        description: home.meta.description,
        url: home.meta.url,
        image: home.meta.image
      },
      hero: {
        HeroTitle: home.Hero.HeroTitle,
        HeroSubtitle: home.Hero.HeroSubtitle,
        DesktopHeroImage: home.Hero.DesktopHeroImage,
        MobileHeroImage: home.Hero.MobileHeroImage,
        CTA: home.Hero.CTA,
        CTALink: home.Hero.CTALink,
      },
      blocks: {
        blocks: home.TextImageSection.blocks
      },
      benefits: {
        sectionTitle: home.BenefitsSection.SectionTitle,
        benefits: home.BenefitsSection.benefits,
      },
      some: {
        socialMediaList: site.SocialMedia.socialMediaList
      }
    },
  }
}