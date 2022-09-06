import styles from '../styles/Footer.module.scss'

const CompanyDetails = ({ address, postalCode, mapCTATitle, mapURL, openingHoursTitle, openingHoursWeekDays, openingHoursWeekend }) => {
    return (
        <>
            {address && (<p className={styles.colText}>{address}</p>)}
            {postalCode && (<p className={styles.colText}>{postalCode}</p>)}
            {mapURL && (<a href={mapURL} target="_blank" rel="noopener noreferrer">{mapCTATitle}</a>)}
            {openingHoursTitle && (<p className={styles.colText}>{openingHoursTitle}</p>)}
            {openingHoursWeekDays && (<p className={styles.colTextNOPadding}>{openingHoursWeekDays}</p>)}
            {openingHoursWeekend && (<p className={styles.colTextNOPadding}>{openingHoursWeekend}</p>)}
        </>
    )
}

export default CompanyDetails