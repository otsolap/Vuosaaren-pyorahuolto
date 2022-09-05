import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MarkdownBlock from '@components/MarkdownBlock'
import Script from 'next/script'

const Index = ({ meta, hero, markdown, information }) => {
  const router = useRouter()
  const payment = information.payment
  const company = information.company

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
      <Meta meta={meta} />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <section id="home">
        <Hero hero={hero} />
        <MarkdownBlock markdown={markdown} />
        <div className="contact-info-wrapper">
          {company.openingHoursTitle && (<p><strong>{company.openingHoursTitle}</strong></p>)}
          {company.openingHoursWeekDay || company.openingHoursWeekend && (
            <p>
              <strong>{company.openingHoursWeekDays}</strong>
              <strong className="ml-half">{company.openingHoursWeekend}</strong>
            </p>
          )}
          {payment.description && (<p>{payment.description}</p>)}
        </div>
      </section>
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
        image: home.meta.image,
      },
      hero: {
        DesktopHeroImage: home.Hero.DesktopHeroImage,
        MobileHeroImage: home.Hero.MobileHeroImage,
        ImageAltText: home.Hero.ImageAltText,
        HeroTitle: home.Hero.HeroTitle,
      },
      markdown: {
        body: home.Markdown.body,
      },
      information: {
        payment: site.Payment,
        company: site.Company
      }
    },
  }
}