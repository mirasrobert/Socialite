import { useState } from 'react'

const CommentForm = () => {
  const [text, setText] = useState('')

  return (
    <div className='commentForm'>
      <img
        className='commentUserImg'
        src='https://randomuser.me/api/portraits/men/14.jpg'
        alt=''
      />
      <input
        className='shareInput'
        placeholder='Write a comment...'
        name='text'
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
      />
      <hr />
    </div>
  )
}

export default CommentForm
