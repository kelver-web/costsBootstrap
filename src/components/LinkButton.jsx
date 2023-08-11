import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';


function LinkButton() {
    return (
        <Nav.Link href='/newproject' className='mt-2'>
            <Button variant="outline-warning">Criar Projeto</Button>
        </Nav.Link>
    )
}

export default LinkButton
