import { ListGroup, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Suggestions = () => {
  return (
    <div id='who-to-follow'>
      <h5>Who to Follow</h5>
      <ListGroup variant='flush' className='transparent'>
        <ListGroup.Item className='py-3'>
          <Row className='g-0'>
            <Col md={2} className='me-2'>
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
                <p>Diana Amber</p>
                <Link to='/profile' className='text-success'>
                  Add Friend
                </Link>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className='py-3'>
          <Row className='g-0'>
            <Col md={2} className='me-2'>
              <Image
                className='border-round'
                width='40'
                height='40'
                fluid
                src='https://themified.com/friend-finder/images/users/user-12.jpg'
              />
            </Col>
            <Col>
              <div className='follow-suggestions'>
                <p>Chris Haris</p>
                <Link to='/profile' className='text-success'>
                  Add Friend
                </Link>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className='py-3'>
          <Row className='g-0'>
            <Col md={2} className='me-2'>
              <Image
                className='border-round'
                width='40'
                height='40'
                fluid
                src='https://themified.com/friend-finder/images/users/user-13.jpg'
              />
            </Col>
            <Col>
              <div className='follow-suggestions'>
                <p>Brian Walton</p>
                <Link to='/profile' className='text-success'>
                  Add Friend
                </Link>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Suggestions
