import { useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../actions/postActions'
import Loader from '../Loader'
import Message from '../Message'

import moment from 'moment'

const Post = () => {
  const dispatch = useDispatch()

  const userPosts = useSelector((state) => state.userPosts)

  const { posts, loading, error } = userPosts

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  if (error) {
    return <Message variant={'error'}>{error}</Message>
  }

  return (
    <>
      {loading && posts.length === 0 ? (
        <Loader />
      ) : (
        <>
          {posts.map((post) => (
            <Card className='posts my-3' key={post._id}>
              <Card.Body>
                <Row className='g-0'>
                  <Col md={1} className='me-1'>
                    <Image
                      className='border-round'
                      width='40'
                      height='40'
                      fluid
                      src='https://themified.com/friend-finder/images/users/user-11.jpg'
                    />
                  </Col>
                  <Col>
                    <div className='follow-suggestions'>
                      <strong>{post.user.name}</strong>
                      <p className='text-muted'>
                        {moment(post.createdAt).fromNow()}
                      </p>
                    </div>
                  </Col>
                </Row>
                <hr />
                <strong className='post-user-badge'>
                  Senior Wordpress Developer
                </strong>
                <p className='post-text mt-3'>{post.text}</p>
                <div className='tags'>
                  {post.tags.split(',').map((tag, index) => (
                    <p className='tags-item' key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  )
}

export default Post
