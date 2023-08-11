import ProjectForm from "../project/ProjectForm"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


function NewProject() {

  return (
    <>
      <Row className='d-flex justify-content-center'>
          <Form.Group as={Col} md="4">
            <h1 className="text-white fw-bolder ml-5">Criar Projeto</h1>
            <p className="text-white">Crie os seus projetos para depois adicionar os serviços</p>
          </Form.Group>
        </Row>
      <ProjectForm />
    </>
  )
}

export default NewProject
