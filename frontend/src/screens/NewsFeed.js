import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import MiniProfile from '../components/newsfeed/MiniProfile'
import PostForm from '../components/newsfeed/PostForm'
import Posts from '../components/newsfeed/Posts'
import Suggestions from '../components/newsfeed/Suggestions'

const NewsFeed = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const { loading, userInfo } = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo && !userInfo.token && !loading) {
      // Check if logged in
      navigate('/')
    }
  }, [userInfo])

  return (
    <>
      <Row>
        <Col md={3}>
          <MiniProfile />
        </Col>
        <Col md={6}>
          <PostForm />
          <Posts />
        </Col>
        <Col md={3}>
          <Suggestions />
        </Col>
      </Row>
    </>
  )
}

export default NewsFeed
