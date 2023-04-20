import React, { useState } from 'react'

export default function CommentPage() {
  const [comments, setComments] = useState<Array<Object>>([]);

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  }

  return (
    <>
      <button onClick={fetchComments}>
        Load Comments
      </button>
      {comments.map((comment: any) => (
          <div key={comment.id}> {comment.id}{comment.text}</div>
        ))}
    </>
  )
}
