import { Card, Image, Row, Col } from 'react-bootstrap'

const Post = () => {
  return (
    <>
      <Card className='my-3'>
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
                <strong>Diana Amber</strong>
                <p className='text-muted'>3 mins ago</p>
              </div>
            </Col>
          </Row>
          <hr />
          <strong className='post-user-badge'>
            Senior Wordpress Developer
          </strong>
          <p className='post-text mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <div className='tags'>
            <p className='tags-item'>HTML</p>
            <p className='tags-item'>PHP</p>
            <p className='tags-item'>CSS</p>
            <p className='tags-item'>Javascript</p>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Post
