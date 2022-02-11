import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Navbar bg='primary' variant='primary' className='nav mb-4'>
        <Container>
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

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
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
