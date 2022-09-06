import React from 'react'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import ContactDetails from '@partials/ContactDetails'

const Contact = ({ meta, hero, information }) => {
    const contact = information.contact
    const company = information.company

    return (
        <>
            <Meta meta={meta} />
            <section id="contact">
                <Hero hero={hero} />
                <div className="contact-info-wrapper">
                    {contact.title && (<h2>{contact.title}</h2>)}
                    {company.address && (<p>{company.address}</p>)}
                    {company.postalCode && (<p>{company.postalCode}</p>)}
                    {company.mapCTATitle && company.mapURL && (<a href={company.mapURL} target="_blank" rel="noopener noreferrer">{company.mapCTATitle}</a>)}
                    {contact.description && (<p>{contact.description}</p>)}
                    <ContactDetails contactList={contact.contactList} />
                </div>
            </section>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    const home = await import(`../content/home.json`)
    const site = await import(`../content/site.json`)
    const contact = await import(`../content/contact.json`)

    return {
        props: {
            hero: {
                DesktopHeroImage: home.Hero.DesktopHeroImage,
                MobileHeroImage: home.Hero.MobileHeroImage,
                ImageAltText: home.Hero.ImageAltText,
            },
            information: {
                contact: site.Contact,
                company: site.Company
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