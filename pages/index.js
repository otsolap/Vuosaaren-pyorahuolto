import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import ThemeBlock from "@components/ThemeBlock"
import ReferenceList from '@components/landingPage/ReferenceList'
import BenefitList from '@components/landingPage/BenefitList'
import Faq from "@components/landingPage/Faq"
import ContactDetails from "@components/ContactDetails"
import ContactForm from "@components/ContactForm"
import Script from 'next/script'

const Index = ({ meta, hero, themes, benefits, references, faq, contact, some }) => {
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
        <ThemeBlock themes={themes} />
        <BenefitList benefits={benefits} />
        <ReferenceList references={references} />
        <Faq faq={faq} />
        <div className="container ContactContainer">
          <ContactDetails contact={contact} some={some} />
          <ContactForm contact={contact} />
        </div>
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
      themes: {
        themes: home.TextImageSection.themes
      },
      benefits: {
        sectionTitle: home.BenefitsSection.SectionTitle,
        benefits: home.BenefitsSection.benefits,
      },
      references: {
        sectionTitle: home.ReferenceSection.SectionTitle,
        referees: home.ReferenceSection.referees,
      },
      faq: {
        sectionTitle: home.FAQSection.SectionTitle,
        faqs: home.FAQSection.faqs
      },
      contact: {
        SectionTitle: site.ContactSection.SectionTitle,
        SectionDescription: site.ContactSection.SectionDescription,
        CTA: site.ContactSection.CTA,
        SuccessMessage: site.ContactSection.SuccessMessage
      },
      some: {
        socialMediaList: site.SocialMedia.socialMediaList
      }
    },
  }
}