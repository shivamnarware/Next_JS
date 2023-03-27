import React from 'react'
import { useRouter } from 'next/router'

export default function productid() {
  const router=useRouter();
  const reviewId=router.query.reviewid;
  const productId=router.query.productid;
  return (
    <div>Product id is {productId} Review id is {reviewId}</div>
  )
}
