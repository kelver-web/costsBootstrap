import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <Navbar className='border-top border-warning d-flex flex-column mt-5'>
      <Container className='d-flex justify-content-center fs-4 pt-2 gap-3 text-warning'>
          <Nav.Link href="/"><FaFacebook/></Nav.Link>
          <Nav.Link href="/projects"><FaInstagram/></Nav.Link>
          <Nav.Link href="/company"><FaLinkedin/></Nav.Link>
      </Container>
      <Container className='d-flex justify-content-center pb-2 gap-2'>
        <strong className='text-warning'>Costs</strong>{' '} &copy; 2023
      </Container>
    </Navbar>
  )
}

export default Footer