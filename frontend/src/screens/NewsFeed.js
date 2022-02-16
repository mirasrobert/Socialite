import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const NewsFeed = () => {
  const navigate = useNavigate()

  const auth = useSelector((state) => state.auth)

  const { user, isLoading } = auth

  const dispatch = useDispatch()

  const users = useSelector((state) => state.auth.users)

  useEffect(() => {
    dispatch(getAllUsers()) 
  }, [dispatch])

  useEffect(() => {
    if (!user) {
      // Check if logged in
      return navigate('/')
    }
  }, [user])

  return (
    <div>
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar profileInfo={null} users={users} />
      </div>
    </div>
  )
}

export default NewsFeed
