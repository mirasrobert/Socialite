import './Comment.css'

import CommentForm from './CommentForm'
import CommentBox from './CommentBox'

const Comment = () => {
  return (
    <>
      <div className='comment'>
        <div className='commentWrapper'>
          <CommentForm />

          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </div>
      </div>
    </>
  )
}

export default Comment
