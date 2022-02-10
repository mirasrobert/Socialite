import { Row, Col } from 'react-bootstrap'
import MiniProfile from '../components/newsfeed/MiniProfile'
import PostForm from '../components/newsfeed/PostForm'
import Posts from '../components/newsfeed/Posts'
import Suggestions from '../components/newsfeed/Suggestions'

const NewsFeed = () => {
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
