import React from 'react'
import styles from '../styles/Markdown.module.scss'
import Markdown from 'markdown-to-jsx'

const TextBlock = ({ markdown }) => {
    return (
        <section className={styles.markdownBody}>
            <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                {markdown.body}
            </Markdown>
        </section>
    )
}

export default TextBlock;