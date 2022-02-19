import './Comment.css'

import CommentForm from './CommentForm'
import CommentBox from './CommentBox'

const Comment = ({ comments }) => {
  return (
    <>
      <div className='comment'>
        <div className='commentWrapper'>
          <CommentForm />

          { comments.map(comment => (
            <CommentBox key={comment._id} comment={comment} />
          )) }
          
        </div>
      </div>
    </>
  )
}

export default Comment
