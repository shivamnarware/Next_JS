import React from 'react';
import { useRouter } from 'next/router';

export default function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;

    if (params.length === 2) {
        return (
            <h1>
                Viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]}</h1>
    }


    console.log(params);
    return (
        <div>Documentation of blog</div>
    )
}
