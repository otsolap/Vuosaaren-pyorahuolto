import React from 'react'
import styles from '../../styles/List.module.scss'

const listBlock = ({ lists }) => {
    return (
        <section className="container">
            <div className={`sectionContent ${styles.sectionList}`}>
                <ul>
                    <>
                        {lists.lists.map((list, i) => {
                            return (
                                <li key={i} id={list.title}>
                                    <p>{list.title}<span className={styles.price}>{list.price}</span></p>
                                </li>
                            )
                        })}
                    </>
                </ul>
            </div>
        </section>
    )
}

export default listBlock;