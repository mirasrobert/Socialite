import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import Post from '../components/post/Post'
import Sidebar from '../components/sidebar/Sidebar'
import Rightbar from '../components/rightbar/Rightbar'
import Comment from '../components/comment/Comment'
import CommentForm from '../components/comment/CommentForm'

const SinglePost = () => {
  const { id } = useParams()

  const post = {
    _id: '6210944ec05fba73c3cc7e94',
    user: {
      _id: '620cf03eb2f1953293eea8b4',
      name: 'Robert Miras',
      avatar:
        'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    },
    text: 'TestPost',
    likes: [],
    comments: [],
    createdAt: '2022-02-19T06:55:10.435Z',
    updatedAt: '2022-02-19T06:55:10.435Z',
    __v: 0,
  }

  return (
    <Row>
      <Col className='d-sm-none d-md-block d-sm-block' md={3}>
        <Sidebar />
      </Col>

      <Col sm={12} md={6} lg={6}>
        <Post post={post} />

        <Comment />
      </Col>

      <Col className='d-sm-none d-md-block d-sm-block' md={3}>
        <Rightbar profileInfo={null} users={null} />
      </Col>
    </Row>
  )
}

export default SinglePost
