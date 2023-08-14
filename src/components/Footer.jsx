import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <>
      <Navbar className='border-top border-warning d-flex flex-column align-items-center justfy-content-center'>
        <Container className='d-flex justify-content-center align-items-center fs-4 gap-3 text-warning mt-3'>
            <Nav.Link href="/"><FaFacebook/></Nav.Link>
            <Nav.Link href="/projects"><FaInstagram/></Nav.Link>
            <Nav.Link href="/company"><FaLinkedin/></Nav.Link>
        </Container>
        <Container className='d-flex justify-content-center align-items-center gap-2 pb-3'>
          <strong className='text-warning'>Costs</strong> <span className='text-white'>&copy; 2023</span>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer
