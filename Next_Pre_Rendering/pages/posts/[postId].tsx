import React from 'react'
import { useRouter } from 'next/router';

export default function Post({ post }: any) {
    const router=useRouter();

    if(router.isFallback){
      return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    )
}

// Fall Back False

// --------------------x----------------------

// export async function getStaticPaths() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();

//     const paths = data.map((post: any) => {
//         return {
//             params: {
//                 postId: `${post.id}`
//             },
//         }
//     })
//     return {
//         paths: paths,
//         fallback: false,
//     }
// }

// Fall Back True

// --------------------x----------------------
export async function getStaticPaths() {
    return {
        paths: [{
            params: { postId: '1' }
        }, {
            params: { postId: '2' }
        }, {
            params: { postId: '3' }
        }],
        fallback: true,
    }
}


export async function getStaticProps(context: any) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    console.log(`Generating page for /posts/${params.postId}`)
    return {
        props: {
            post: data
        }
    }
}