import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='mt-5'>
      <div className='d-flex py-3 justify-content-center bg-secondary'>
        <Container>
          <span className='text-white'>2022 &copy; Socialite</span>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
