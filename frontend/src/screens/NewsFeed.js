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
  const userLogin = useSelector((state) => state.userLogin)

  const { loading, userInfo } = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    if ((!userInfo || !userInfo.token) && !loading) {
      // Check if logged in
      return navigate('/')
    }
  }, [userInfo])

  return (
    <>
      {!userInfo || !userInfo.token ? (
        <Loader />
      ) : (
        <Row id='newsFeed'>
          <Col md={3} className='newsfeedLeft'>
            <MiniProfile />
          </Col>
          <Col md={6} className='newsfeedCenter'>
            <PostForm />
            <Posts />
          </Col>
          <Col md={3} className='newsfeedRight'>
            <Suggestions />
          </Col>
        </Row>
      )}
    </>
  )
}

export default NewsFeed
