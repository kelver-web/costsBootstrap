import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/costs_logo.png'


function NavbarNav() {
    return (
        <>
            <Navbar expand="lg" className='bg-body-dark px-3 py-4' sticky="top">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border border-warning'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">   
                        </Nav>
                        <Nav className='w-25 gap-1'>
                            <Nav.Link className="text-warning" href="/">Home</Nav.Link>
                            <Nav.Link className="text-warning" href="/projects">Projetos</Nav.Link>
                            <Nav.Link className="text-warning" href="/company">Empresa</Nav.Link>
                            <Nav.Link className="text-warning" href="/contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarNav
