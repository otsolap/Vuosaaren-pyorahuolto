import ReferenceItem from "./ReferenceItem";
import styles from '../../styles/References.module.scss'

const ReferenceList = ({ references, }) => {
    return (
        <section id={styles.referenceSection} className="alt-bg">
            <div className="container">
                <header className="sectionHeader">
                    <h2>{references.sectionTitle}</h2>
                </header>
                <div className="references-container">
                    <div className="referenceItem-container">
                        <ReferenceItem
                            referees={references.referees}
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ReferenceList;