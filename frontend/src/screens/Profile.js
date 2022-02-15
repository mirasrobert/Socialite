import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Card, Image, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import moment from 'moment'

const Profile = () => {
  const auth = useSelector((state) => state.auth)

  const { isLoading, user, errors, isError } = auth

  const navigate = useNavigate()

  useEffect(() => {
    if ((!user || !user.token) && !isLoading) {
      // Check if logged in
      navigate('/')
    }
  }, [user])

  return (
    <>
      {isLoading && !user ? (
        <Loader />
      ) : (
        <>
          <Card>
            <Card.Body>
              <div className='profile-info text-center'>
                <Image
                  src={user && user.avatar}
                  className='img-thumbnail border-round'
                  width='230'
                  height='230'
                />

                <div className='profile-name'>
                  <h5>{user && user.name}</h5>
                  <small className='text-muted'>@{user && user.email}</small>
                </div>

                <LinkContainer to={'/profile/edit'}>
                  <Button variant='info' className='btn btn-sm mt-1'>
                    Edit Profile
                  </Button>
                </LinkContainer>

                <div className='d-flex justify-content-center mt-1'>
                  <div className='w-75'>
                    <p>{user && user.bio}</p>
                  </div>
                </div>

                {user.contact && user.contact.url && (
                  <div className='d-flex justify-content-center pb-3'>
                    <div>
                      <Link to={user && user.contact.url}>
                        <i className='fas fa-globe'></i>
                      </Link>
                    </div>
                  </div>
                )}

                <div className='secondary-info'>
                  {user && user.contact.phone && (
                    <p>
                      <i className='fas fa-phone text-success'></i>
                      {user && user.contact.phone}
                    </p>
                  )}

                  {user && user.studied && (
                    <p>
                      <i className='fas fa-book text-danger'></i>
                      {user && user.studied}
                    </p>
                  )}

                  {user && user.position && (
                    <p>
                      <i className='fas fa-poll text-warning'></i>
                      {user && user.position}
                    </p>
                  )}

                  {user && user.job && (
                    <p>
                      <i className='fas fa-briefcase text-info'></i>
                      {user && user.job}
                    </p>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>

          <Row className='d-flex justify-content-center'>
            <Col md={6}>
              <div className='post'>
                <div className='info'>
                  <img
                    className='profile-pic img-fluid border-rounded'
                    src='https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg'
                    alt=''
                  />
                  <span className='username'>Username</span>
                </div>
                <img
                  src='https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg'
                  className='post-image'
                  alt=''
                />
                <div className='post-content'>
                  <div className='reaction-wrapper'>
                    <div className='d-flex align-items-center'>
                      <i className='fas fa-thumbs-up'></i>
                      <span className='ms-2 font-sm'>1,012 likes</span>
                    </div>
                  </div>
                  <p className='description'>
                    <span>Username </span> Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Fugit, inventore!
                  </p>
                  <p className='post-time'>3 mins ago</p>
                </div>
                <div className='comment-wrapper px-3'>
                  <input
                    type='text'
                    className='comment-box'
                    placeholder='Add a comment'
                  />
                  <button className='comment-btn'>post</button>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default Profile
