import React from 'react'
import { useRouter } from 'next/router'

export default function productid() {
  const router=useRouter();
  const productId=router.query.productid;
  return (
    <div>Product id is {productId}</div>
  )
}
