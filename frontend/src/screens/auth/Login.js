import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { login } from '../../actions/userActions'

import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin) // get the userLogin from the state

  const { loading, userInfo, errors } = userLogin // destructure userInfo that got from the state

  useEffect(() => {
    if (userInfo) {
      navigate('/newsfeed')
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    // DISPATCH LOGIN
    dispatch(login(email, password))
  }

  const emailError =
    errors &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'email')
      ? 'is-invalid'
      : ''

  const passwordError =
    errors &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'password')
      ? 'is-invalid'
      : ''

  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col md={8}>
          <h3 className='display-4 text-uppercase'>SIGN IN</h3>
          {typeof errors === 'string' && (
            <Message variant='danger'>{errors}</Message>
          )}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                className={emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className='invalid-feedback'>
                {errors &&
                  Array.isArray(errors) &&
                  errors.length > 0 &&
                  errors.filter((err) => err.param === 'email')[0].msg}
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='email'
                className={passwordError}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='invalid-feedback'>
                {errors &&
                  Array.isArray(errors) &&
                  errors.length > 0 &&
                  errors.filter((err) => err.param === 'password')[0].msg}
              </div>

              <Form.Text className='text-muted'>
                Never share your password with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>

            <div className='py-2'>
              <span className='me-2'>Haven't join yet?</span>
              <Link to='/register'>Join Us</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login
