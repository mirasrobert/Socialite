import { useEffect } from 'react'
import { ListGroup, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getAllUsers } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'

const Suggestions = () => {
  const dispatch = useDispatch()

  const { users, isLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <>
      <h5>Who to Follow</h5>
      {!isLoading &&
        users.map((user) => (
          <div id='who-to-follow' key={user._id}>
            <ListGroup variant='flush' className='transparent'>
              <ListGroup.Item className='py-3'>
                <Row className='g-0'>
                  <Col md={2} className='me-2'>
                    <Image
                      className='border-round'
                      width='40'
                      height='40'
                      fluid
                      src={user.avatar}
                    />
                  </Col>
                  <Col>
                    <div className='follow-suggestions'>
                      <p>{user.name}</p>
                      <Link
                        to={`/profiles/${user._id}`}
                        className='text-success'>
                        Add Friend
                      </Link>
                    </div>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </div>
        ))}
    </>
  )
}

export default Suggestions
