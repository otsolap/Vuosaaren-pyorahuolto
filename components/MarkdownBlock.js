import React from 'react'
import Markdown from 'markdown-to-jsx'

const MarkdownBlock = ({ markdown }) => {
    return (
        <section className="container markdownBody">
            <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                {markdown.body}
            </Markdown>
        </section>
    )
}

export default MarkdownBlock;