import { useState } from 'react'

import { createComment } from '../../features/posts/postSlice'
import { useDispatch } from 'react-redux'

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const onSumbitHandler = (e) => {
    e.preventDefault()

    const formData = {
      id: postId,
      commentData: {
        text,
      },
    }

    dispatch(createComment(formData))
  }

  return (
    <div className='commentForm'>
      <img
        className='commentUserImg'
        src='https://randomuser.me/api/portraits/men/14.jpg'
        alt=''
      />
      <form onSubmit={onSumbitHandler} className='d-inline-block'>
        <input
          className='shareInput'
          placeholder='Write a comment...'
          name='text'
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <hr />
    </div>
  )
}

export default CommentForm
