import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

import Login from './screens/auth/Login'
import Register from './screens/auth/Register'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App
