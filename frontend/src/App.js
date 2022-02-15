import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

import Login from './screens/auth/Login'
import Register from './screens/auth/Register'

import NewsFeed from './screens/NewsFeed'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import OtherProfile from './screens/OtherProfile'

import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/newsfeed' element={<NewsFeed />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profiles/:id' element={<OtherProfile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
          </Routes>
        </Container>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
