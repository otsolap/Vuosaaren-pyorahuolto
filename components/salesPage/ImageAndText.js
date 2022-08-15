import Image from 'next/image'
import styles from '../../styles/ImageAndText.module.scss'

const ImageAndText = ({ blocks }) => {
    return (
        <>
            {blocks.blocks.map((block, i) => {
                return (
                    <section
                        key={i}
                        id={block.title}
                        className={styles.ImageTextBlockSection}
                    >
                        <div className="container">
                            <h2 className="mobile-only">{block.title}</h2>
                            <div className={styles.blockContent}>
                                {block.image && (
                                    <div className={styles.blockBlockImageContainer}>
                                        <Image
                                            src={block.image}
                                            alt={block.title}
                                            width={600}
                                            height={500}
                                            layout='responsive'
                                            objectFit='contain'
                                            objectPosition='center'
                                            quality={100}
                                            className={styles.blockBlockImage}
                                        />
                                    </div>
                                )}
                                <div className={styles.blockDescriptionContainer}>
                                    <h2 className="desktop-only">{block.title}</h2>
                                    <p>{block.description}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default ImageAndText