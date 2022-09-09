import styles from '../styles/Footer.module.scss'

const ContactDetails = ({ contactList }) => {
    const contactInfo = contactList.map((contacts, i) => {
        return (
            <p className={styles.contactText} key={i}>
                {contacts.type === 'Email' ? (
                    <a className={styles.contactLink} href={`mailto:${contacts.url}`} target="_blank" rel="noopener noreferrer">
                        {contacts.title}: {contacts.url}
                    </a>
                ) : null}
                {contacts.type === 'Puhelin' ? (
                    <a className={styles.contactLink} href={`tel:${contacts.url}`} target="_blank" rel="noopener noreferrer">
                        {contacts.title}: {contacts.url}
                    </a>
                ) : null}
            </p>
        )
    })

    return (
        <>
            {contactInfo}
        </>
    )
}

export default ContactDetails