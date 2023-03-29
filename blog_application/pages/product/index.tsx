import React, { use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function product({productId=100}) {
  const router = useRouter();

  return (
    <>
      <div>product</div>
      <Link href="/">
          Home
      </Link>
      <h2>
        <Link href={`/product/${productId}`}>
           Product {productId}
        </Link>
      </h2>
    </>

  )
}
