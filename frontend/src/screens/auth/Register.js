import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col md={8}>
          <h3 className='display-4 text-uppercase'>SIGN UP</h3>

          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter your name' name='name' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' name='email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' name='password' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>

            <div className='py-2'>
              <span className='me-2'>Already have an account?</span>
              <Link to='/'>Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Register
