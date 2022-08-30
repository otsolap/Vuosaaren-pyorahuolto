import React from 'react'

const listBlock = ({ lists }) => {
    return (
        <section className="container">
            <div className="sectionContent">
                <ul className="sectionList">
                    <>
                        {lists.lists.map((list, i) => {
                            return (
                                <li key={i} id={list.title}>
                                    <p>{list.title}</p>
                                    <p>{list.price}</p>
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