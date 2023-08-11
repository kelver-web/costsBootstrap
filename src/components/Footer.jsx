import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <Navbar className='border-top border-warning d-flex flex-column align-items-center mt-5'>
      <Container className='d-flex justify-content-center align-items-center fs-4 gap-3 text-warning mt-4'>
          <Nav.Link href="/"><FaFacebook/></Nav.Link>
          <Nav.Link href="/projects"><FaInstagram/></Nav.Link>
          <Nav.Link href="/company"><FaLinkedin/></Nav.Link>
      </Container>
      <Container className='d-flex justify-content-center pb-2 gap-2'>
        <strong className='text-warning'>Costs</strong> &copy; 2023
      </Container>
    </Navbar>
  )
}

export default Footer