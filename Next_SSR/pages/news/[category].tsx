import React from 'react'

export default function ArticleListByCategory({ articles, category }: any) {
    return (<>
        <h1>Showing news for category {category}</h1>
        {articles.map((article: any) => (
            <div key={article.id}>
                <h2>
                    {article.id} {article.title} | {article.category}
                </h2>
            </div>
        ))}
    </>
    )
}

export async function getServerSideProps(context : any) {
    const {params} = context;
    const {category} = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);

    const data = await response.json();
    return {
        props: {
            articles: data,
            category
        }
    }
}