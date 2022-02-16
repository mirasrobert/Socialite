import './Post.css'
import like from '../../img/like.png'
import heart from '../../img/heart.png'
import moment from 'moment'

const Post = ({ post }) => {
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
            <img
              className='img-fluid postImg'
              src={post.image}
              alt=''
            />
          )}
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src={like} alt='' />
            <img className='likeIcon' src={heart} alt='' />
            <div className='postLikeCounter'>32 people liked it</div>
          </div>
          <div className='postBottomRight'></div>
        </div>
      </div>
    </div>
  )
}

export default Post
