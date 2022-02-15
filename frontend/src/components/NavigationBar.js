import { useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const auth = useSelector((state) => state.auth)

  const { user, isLoading } = auth

  useEffect(() => {
    if ((!user || !user.token) && !isLoading) {
      // Check if logged in
      return navigate('/')
    }
  }, [user])

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Navbar bg='primary' variant='primary' className='nav mb-4'>
        <Container>
          <LinkContainer to={!user || !user.token ? '/' : '/newsfeed'}>
            <Navbar.Brand href='#home'>
              <img
                alt=''
                src='https://react-bootstrap.github.io/logo.svg'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              <span className='text-white'>Socialite</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {user ? (
                <NavDropdown title={user.name} id='basic-nav-dropdown'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/'>
                  <Nav.Link>
                    {' '}
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
