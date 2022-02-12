import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const MiniProfile = () => {
  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  return (
    <div id='mini-profile'>
      <Card>
        <Card.Header className='bg-primary card-header d-flex justify-content-center'>
          <Image
            className='border-round avatar'
            thumbnail
            src={userInfo.avatar}
          />
        </Card.Header>
        <Card.Body className='mt-5 text-center'>
          <div>
            <h5>{userInfo.name}</h5>
            <small className='text-muted'>{userInfo.job}</small>
          </div>
          <hr />
          <div>
            <h5 className='text-muted'>Following</h5>
            <strong>35</strong>
          </div>
          <hr />
          <div>
            <h5 className='text-muted'>Followers</h5>
            <strong>155</strong>
          </div>
          <hr />
          <Link className='text-primary' to='/profile'>
            View Profile
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MiniProfile
