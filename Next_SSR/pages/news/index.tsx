import React from 'react'

// No static pages are generated at build time 
// All html pages are return at request time hence increase SEO
export default function NewsArticle({ articles }: any) {
    return (
        <>
            <h1>List of news article</h1>{
                articles.map((article: any) => (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title} | {article.category}
                        </h2>
                    </div>
                ))
            }
        </>
    )
}


export async function getServerSideProps() {
    const response = await fetch(`http://localhost:4000/news`);
    const data = await response.json();
    return {
        props: {
            articles: data
        }
    }
}


