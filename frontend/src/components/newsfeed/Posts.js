import { useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, reset } from '../../features/posts/postSlice'
import Loader from '../Loader'
import Message from '../Message'

import moment from 'moment'

const Post = () => {
  const dispatch = useDispatch()

  const { posts, isError, isSuccess, isLoading, errors } = useSelector(
    (state) => state.posts
  )

  useEffect(() => {
    dispatch(reset())

    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          {posts.map((post) => (
            <div className='post' key={post._id}>
              <div className='info'>
                <img
                  className='profile-pic img-fluid border-rounded'
                  src={post.user.avatar}
                  alt=''
                />
                <span className='username'>{post.user.name}</span>
              </div>
              {post.image && (
                <>
                  <img src={post.image} className='post-image' alt='' />
                </>
              )}
              <div className='post-content'>
                <div className='reaction-wrapper'>
                  <div className='d-flex align-items-center'>
                    <i className='fas fa-thumbs-up'></i>
                    <span className='ms-2 font-sm'>1,012 likes</span>
                  </div>
                </div>
                <p className='description'>
                  <span>{post.user.name} </span> {post.text}
                </p>
                <p className='post-time'>{moment(post.createdAt).fromNow()}</p>
              </div>
              <div className='comment-wrapper px-3'>
                <input
                  type='text'
                  className='comment-box'
                  placeholder='Add a comment'
                />
                <button className='comment-btn'>post</button>
              </div>
            </div>
          ))}
        </Row>
      )}
    </>
  )
}

export default Post
