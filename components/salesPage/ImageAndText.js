import Image from 'next/image'
import styles from '../../styles/ImageAndText.module.scss'

const ImageAndText = ({ blocks }) => {

    return (
        <section className={`container ${styles.imageTextBlockSection}`}>
            <>
                {blocks.blocks.map((block, i) => {
                    return (
                        <div
                            key={i}
                            id={block.title}
                            className={`${styles.imageTextBlock} ${i % 2 === 0 ? `` : `${styles.odd}`}`}
                        >
                            <div className={styles.imageTextBlockContent}>
                                {block.image && (
                                    <div className={styles.imageTextBlockImageContainer}>
                                        <Image
                                            src={block.image}
                                            alt={block.title}
                                            width={720}
                                            height={500}
                                            layout="responsive"
                                            objectFit='cover'
                                            objectPosition='center'
                                            quality={100}
                                        />
                                    </div>
                                )}
                                <div className={styles.imageTextBlockDescriptionContainer}>
                                    <h2>{block.title}</h2>
                                    <p>{block.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        </section>
    )
}

export default ImageAndText