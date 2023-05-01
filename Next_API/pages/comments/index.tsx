import { headers } from 'next/dist/client/components/headers';
import React, { useState } from 'react'

export default function CommentPage() {
  const [comments, setComments] = useState<Array<Object>>([]);
  const [comment, setComment] = useState<any>('');



  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  }

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json();
    console.log(data);
  }


  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>
        Load Comments
      </button>
      {comments.map((comment: any) => (
        <div key={comment.id}> {comment.id}{comment.text}</div>
      ))}
    </>
  )
}
