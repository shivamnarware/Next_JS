import React from 'react'
import Link from 'next/link';

export default function PostList({ posts }: any) {
    return (
        <>
            <div>List of post</div>
            {posts.map((post: any) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>
                                {post.id} {post.title}
                            </h2>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}