import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import MiniProfile from '../components/newsfeed/MiniProfile'
import PostForm from '../components/newsfeed/PostForm'
import Posts from '../components/newsfeed/Posts'
import Suggestions from '../components/newsfeed/Suggestions'

import Loader from '../components/Loader'

const NewsFeed = () => {
  const auth = useSelector((state) => state.auth)

  const { user, isLoading } = auth

  const navigate = useNavigate()

  useEffect(() => {
    if ((!user || !user.token) && !isLoading) {
      // Check if logged in
      return navigate('/')
    }
  }, [user])

  return (
    <>
      {!user || !user.token ? (
        <Loader />
      ) : (
        <Row id='newsFeed'>
          <Col lg={3}></Col>
          <Col md={5} className='newsfeedCenter'>
            <PostForm />

            <Posts />
          </Col>
          <Col md={4} className='newsfeedRight'>
            <Suggestions />
          </Col>
        </Row>
      )}
    </>
  )
}

export default NewsFeed
