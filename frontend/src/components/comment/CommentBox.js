import React from 'react'

const CommentBox = () => {
  return (
    <div className='commentBox'>
      <img
        className='commentUserImg'
        src='https://randomuser.me/api/portraits/men/14.jpg'
        alt=''
      />
      <div className='commentText'>
        <p>
          <span className='commentUsername'>Robert Miras</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          rem, ab non aliquid nesciunt ex!
        </p>
        <small className='text-muted m-0 p-0 commentDate'>3 mins ago</small>
      </div>
    </div>
  )
}

export default CommentBox
