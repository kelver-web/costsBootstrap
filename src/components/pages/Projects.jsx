import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

import { useState, useEffect } from 'react'
import LinkButton from '../LinkButton'
import ProjectCard from '../project/ProjectCard'
import Spinner from 'react-bootstrap/Spinner';

import api from '../../services/api'
import { toast } from 'react-toastify';



function Projects() {

  const [projects, setProjects] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const getProjects = async () => {
        const { data } = await api.get('projects')

        setProjects(data)
        setLoader(true)

      }

      getProjects()
    }, 2000)
  })

  const removeProject = async (id) => {
    try {
      await toast.promise(api.delete(`projects/${id}`), {
        pending: 'Deletando projeto...',
        error: 'Falha ao deletar o projeto',
        success: 'Projeto deletado com sucesso!'
      },
        { validateStatus: () => true }
      )
      setProjects(projects.filter((project) => project.id !== id))

    } catch (error) {
      console.log(`Error with status code 404 ${error}`)
    }
  }


  return (
    <Container className='px-4'>
      <Container className="d-flex justify-content-sm-between align-items-sm-center my-5 px-4">
        <Container className="d-flex justify-content-sm-between align-items-sm-center">
          <h1 className='d-flex text-warning fw-bolder'>Meus Projetos</h1>
          <LinkButton href="/newproject" text="Criar Projeto"></LinkButton>
        </Container>
      </Container>
      <Container>
        <Row>
          <Container className="col-md-4 mb-3 d-flex flex-wrap w-100">
            {projects.length > 0 &&
              projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  budget={project.budget}
                  key={project.id}
                  category={project.category.name}
                  handleRemove={removeProject}
                />
              ))}
            <Container>
              <Container>
                {!loader &&
                  <Container>
                    <Spinner animation="border" variant="warning" />
                    <span className="text-white"> &nbsp;
                      &nbsp;Loading...</span>
                  </Container>}
                {loader && projects.length === 0 && (
                  <p className='text-white'>Não há projetos cadastrados</p>
                )}
              </Container>
            </Container>
          </Container>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
