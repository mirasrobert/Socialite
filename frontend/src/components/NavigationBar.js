import { Navbar, Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <>
      <Navbar bg='primary' variant='primary' className='mb-4 sticky-top'>
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
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
