import React from 'react';
import {useRouter} from 'next/router';

export default function Doc() {
  const router=useRouter();
  const {params=[]}=router.query;
  console.log(params);
  return (
    <div>Documentation of blog</div>
  )
}
