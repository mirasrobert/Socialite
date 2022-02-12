import { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'

import Loader from '../components/Loader'

const EditProfile = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo, loading } = userLogin

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [phone, setPhone] = useState('')
  const [url, setUrl] = useState('')
  const [job, setJob] = useState('')
  const [position, setPosition] = useState('')
  const [studied, setStudied] = useState('')

  useEffect(() => {
    if ((!userInfo || !userInfo.token) && !loading) {
      return navigate('/')
    }

    setName(userInfo.name)

    setEmail(userInfo.email)

    if (userInfo.bio) setBio(userInfo.bio)
    if (userInfo.contact && userInfo.contact.phone)
      setPhone(userInfo.contact.phone)

    if (userInfo.contact && userInfo.contact.url) setUrl(userInfo.contact.url)
    if (userInfo.job) setJob(userInfo.job)
    if (userInfo.position) setPosition(userInfo.position)
    if (userInfo.studied) setStudied(userInfo.studied)
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser(name, email, bio, url, phone, job, position, studied))
    navigate('/profile')
  }

  return (
    <>
      {!userInfo || !userInfo.token ? (
        <Loader />
      ) : (
        <div>
          <div className='d-flex justify-content-start'>
            <LinkContainer to='/profile'>
              <Button variant='secondary' type='button'>
                <i className='fas fa-arrow-alt-circle-left pe-2'></i>
                Back
              </Button>
            </LinkContainer>
          </div>

          <Row className='d-flex justify-content-center mb-5'>
            <Col md={8}>
              <h3 className='display-4 text-uppercase'>EDIT PROFILE</h3>
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter your full name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />

                      <div className='invalid-feedback'></div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Change your email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <div className='invalid-feedback'></div>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='mb-3'>
                  <Form.Label>Bio</Form.Label>
                  <textarea
                    className={`form-control`}
                    placeholder='Write your bio'
                    value={bio}
                    name='bio'
                    onChange={(e) => setBio(e.target.value)}></textarea>

                  <div className='invalid-feedback'></div>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter your phone no.'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />

                      <div className='invalid-feedback'></div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>URL</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter url'
                        name='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />

                      <div className='invalid-feedback'></div>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='mb-3'>
                  <Form.Label>Studied</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='I studied...'
                    name='studied'
                    value={studied}
                    onChange={(e) => setStudied(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Job</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your job'
                    name='job'
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />

                  <div className='invalid-feedback'></div>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your job position'
                    name='position'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Form.Group>

                <Button variant='primary' type='submit'>
                  Update
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}

export default EditProfile
