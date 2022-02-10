import { Card, Image, Form, Button, Row, Col } from 'react-bootstrap'

const Post = () => {
  return (
    <>
      <Card className='border-top-orange'>
        <Card.Body>
          <Form>
            <Row className='g-0'>
              <Col md={1} className='me-2'>
                <Image
                  className='border-round'
                  fluid
                  width='50'
                  height='50'
                  src={`https://randomuser.me/api/portraits/men/67.jpg`}
                />
              </Col>
              <Col md={8}>
                <textarea
                  className='form-control'
                  placeholder='Write what you wish'></textarea>
                <i className='fas fa-images'></i>
              </Col>
              <Col className='gx-3'>
                <Button
                  className='button-rounded publish-btn'
                  variant='primary'
                  type='submit'>
                  Publish
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Post
