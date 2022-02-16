import './Profile.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { getSingleUser } from '../features/auth/authSlice'

const Profile = () => {
  const { id } = useParams() // get the id for url parameter

  const dispatch = useDispatch()

  const auth = useSelector((state) => state.auth)

  const { isLoading, user, errors, isError, profile } = auth

  const navigate = useNavigate()

  useEffect(() => {
    if ((!user || !user.token) && !isLoading) {
      // Check if logged in
      navigate('/')
    }

    dispatch(getSingleUser(id))
  }, [user])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : errors ? (
        <Message variant={'danger'}>{errors}</Message>
      ) : profile && profile.errors ? (
        <Message variant={'danger'}>
          {user.errors.includes('Cast to ObjectId failed')
            ? 'Server Error'
            : 'User not found'}
        </Message>
      ) : (
        <>
          <div className='profile'>
            <Sidebar />
            <div className='profileRight'>
              <div className='profileRightTop'>
                <div className='profileCover'>
                  <img
                    className='profileCoverImg'
                    src='https://images.pexels.com/photos/11082557/pexels-photo-11082557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    alt=''
                  />
                  <img
                    className='profileUserImg'
                    src={profile && profile.avatar}
                    alt=''
                  />
                </div>
                <div className='profileInfo'>
                  <h4 className='profileInfoName'>{profile && profile.name}</h4>
                  <span className='profileInfoDesc'>
                    {profile && profile.bio}
                  </span>
                </div>
              </div>
              <div className='profileRightBottom'>
                <Feed profileInfo={profile} />
                <Rightbar profileInfo={profile} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
