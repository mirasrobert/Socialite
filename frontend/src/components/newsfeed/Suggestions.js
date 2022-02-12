import { useEffect } from 'react'
import { ListGroup, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getAllUsers } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader'

const Suggestions = () => {
  const dispatch = useDispatch()

  const userGetAll = useSelector((state) => state.userGetAll)

  const { users, loading } = userGetAll

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <>
      <h5>Who to Follow</h5>
      {!loading &&
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
