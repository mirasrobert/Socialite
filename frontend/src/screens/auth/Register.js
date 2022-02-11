import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { register } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister) // get the userRegister from the state

  const { loading, userInfo, errors } = userRegister // destructure userInfo that got from the state

  useEffect(() => {
    if (userInfo) {
      navigate('/newsfeed')
    }
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password does not match')
    } else {
      // DISPATCH REGISTER
      dispatch(register(name, email, password))
    }
  }

  // Errors
  const nameError =
    errors &&
    !loading &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'name')
      ? 'is-invalid'
      : ''

  const emailError =
    errors &&
    !loading &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'email')
      ? 'is-invalid'
      : ''

  const passwordError =
    errors &&
    !loading &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.find((err) => err.param === 'password')
      ? 'is-invalid'
      : ''

  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col md={8}>
          <h3 className='display-4 text-uppercase'>SIGN UP</h3>
          {message && <Message variant='danger'>{message}</Message>}
          {typeof errors === 'string' && (
            <Message variant='danger'>{errors}</Message>
          )}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                name='name'
                value={name}
                className={nameError}
                onChange={(e) => setName(e.target.value)}
              />

              <div className='invalid-feedback'>
                {errors &&
                Array.isArray(errors) &&
                errors.length > 0 &&
                errors.filter((err) => err.param === 'name').length > 0
                  ? errors.filter((err) => err.param === 'name')[0].msg
                  : ''}
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                className={emailError}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className='invalid-feedback'>
                {errors &&
                Array.isArray(errors) &&
                errors.length > 0 &&
                errors.filter((err) => err.param === 'email').length > 0
                  ? errors.filter((err) => err.param === 'email')[0].msg
                  : ''}
              </div>

              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                className={passwordError}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='invalid-feedback'>
                {errors &&
                Array.isArray(errors) &&
                errors.length > 0 &&
                errors.filter((err) => err.param === 'password').length > 0
                  ? errors.filter((err) => err.param === 'password')[0].msg
                  : ''}
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                name='confirmPassword'
                value={confirmPassword}
                className={message && 'is-invalid'}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Register
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
