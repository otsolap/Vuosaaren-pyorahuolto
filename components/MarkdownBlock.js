import React from 'react'
import styles from '../styles/Markdown.module.scss'
import Markdown from 'markdown-to-jsx'

const MarkdownBlock = ({ markdown }) => {
    return (
        <section className={`container ${styles.markdownBody}`}>
            <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                {markdown.body}
            </Markdown>
        </section>
    )
}

export default MarkdownBlock;