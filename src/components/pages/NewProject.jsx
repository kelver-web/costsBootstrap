import ProjectForm from "../project/ProjectForm"
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import api from '../../services/api'
import { toast } from 'react-toastify';


function NewProject() {
    
  const navigate = useNavigate()

  const createPost = async (project) => {
      // initialize cost and services
      project.cost = 0
      project.services = []

      await toast.promise(api.post('projects', project), {
          pending: 'Criando novo projeto...',
          error: 'Falha ao criar o projeto',
          success: 'Projeto criado com sucesso'
      },
          { validateStatus: () => true }
      )
      
      setTimeout(() => {
          navigate('/projects')
      }, 2000)
  }


  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Form.Group as={Col} md="4">
          <h1 className="text-white fw-bolder ml-5">Criar Projeto</h1>
          <p className="text-white">Crie os seus projetos para depois adicionar os serviços</p>
        </Form.Group>
      </Row>
      <ProjectForm handleSubmitProject={createPost}/>
    </>
  )
}

export default NewProject
