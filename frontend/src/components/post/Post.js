import './Post.css'
import like from '../../img/like.png'
import heart from '../../img/heart.png'
import moment from 'moment'

import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)

  const user = useSelector((state) => state.auth.user)

  const likeHandler = () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }

      axios.put(
        '/api/posts/' + post._id + '/like',
        { userId: user._id },
        config
      )
    } catch (err) {}
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src={post.user.avatar} alt='' />
            <div className='postTopLeftText'>
              <span className='postUsername'>{post.user.name}</span>
              <span className='postDate text-muted'>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          <div className='postTopRight'>
            <i className='fas fa-ellipsis-v'></i>
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.text}</span>
          {post && post.image && (
            <img className='img-fluid postImg' src={post.image} alt='' />
          )}
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src={like} onClick={likeHandler} alt='' />
            <img
              className='likeIcon'
              src={heart}
              onClick={likeHandler}
              alt=''
            />
            <div className='postLikeCounter'>{likes} people liked it</div>
          </div>
          <div className='postBottomRight'></div>
        </div>
      </div>
    </div>
  )
}

export default Post
