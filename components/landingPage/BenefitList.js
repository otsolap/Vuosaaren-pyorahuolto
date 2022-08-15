import BenefitItem from "./BenefitItem";
import styles from '../../styles/Benefits.module.scss'

const BenefitList = ({ benefits, }) => {
    return (
        <section id={styles.benefitsSection}>
            <div className="container">
                <header className="sectionHeader">
                    <h2>{benefits.sectionTitle}</h2>
                </header>
                <div className="benefits-container">
                    <div className="benefitItem-container">
                        <BenefitItem
                            benefits={benefits.benefits}
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BenefitList;