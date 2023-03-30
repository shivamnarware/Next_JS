import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home() {
  const router=useRouter();

  const handleClick=()=>{
    console.log("inside console");
    router.push("/product");
  }

  return (
    <>
      <div>Home Page</div>
      <Link href="/blog">
         Blog
      </Link>
      <div>hello</div>
      <Link href="/product">
         product
      </Link>
      <div>Order Page</div>
      <button onClick={handleClick}>
        place order
      </button>
    </>
  )
}
