import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import { toast } from 'react-toastify'

import api from '../../services/api'


import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

import { v4 as uuidv4 } from 'uuid'

import formatCurrency from '../../utils/formatCurrency'


function Project() {

  const { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const getProject = async () => {

        const { data } = await api.get(`projects/${id}`)
        setProject(data)
        setServices(data.services)
      }

      getProject()
    }, 1000)
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }


  async function editPost(project) {
    // budget validation
    try {
      if (project.budget < project.cost) {
        toast.error('Orçamento não pode ser menor que o custo do projeto')
        return false
      }
    } catch (error) {
      console.log(error)
    }

    try {
      const { data } = await toast.promise(api.patch(`projects/${project.id}`, project), {
        pending: 'Atualizando projeto...',
        error: 'Falha ao atualizar o projeto',
        success: 'Projeto atualizado com sucesso'
      })

      setProject(data)
      setShowProjectForm(false)

    } catch (error) {
      console.log(error)
    }


    // fetch(`http://localhost:5000/projects/${project.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(project),
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //     setProject(data)
    //     setShowProjectForm(false)
    // })
    // .catch(error => console.log(error))
  }

  async function createService(project) {

    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    // Maximun value validation
    if (newCost > parseFloat(project.budget)) {
      toast.error("Orçamento utrapassado, verifique o valor do serviço")
      project.services.pop()
      return false
    }

    // add service cost to project total cost
    project.cost = newCost

    // updated project
    await toast.promise(api.patch(`projects/${project.id}`, project), {
      pending: 'Atualizando serviço...',
      error: 'Falha ao adicionar o serviço',
      success: 'Serviço adicionado com sucesso'
    })
    setShowServiceForm(false)
  }

  async function removeService(id, cost) {

    const filterService = project.services.filter(
      service => service.id !== id
    )

    const projectUpdated = project

    projectUpdated.services = filterService
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    try {
      await api.patch(`projects/${projectUpdated.id}`, projectUpdated)

      setProject(projectUpdated)
      setServices(filterService)
      toast.success("Serviço removido com sucesso!")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {project.name ? (
        <Container className='mt-5'>
          <Container >
            <Container >
              <Container className='d-flex justify-content-between gap-4 px-4'>
                <div>
                  <h1><span className="badge bg-warning p-3">Projeto: {project.name}</span></h1>
                </div>
                <div>
                  <Button onClick={toggleProjectForm} variant="outline-warning">
                    {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                  </Button>
                </div>
              </Container>
              {!showProjectForm ? (
                <Container className='mt-3 px-4'>
                  <p>
                    <span className='text-warning fw-bolder'>Categoria:</span> <span className=' text-secondary fw-bolder'>{project.category.name}</span>
                  </p>
                  <p>
                    <span className='text-warning fw-bolder'>Total de Orçamento:</span> <span className='text-secondary fw-bolder'>{formatCurrency(project.budget - project.cost)}</span>
                  </p>
                  <p>
                    <span className='text-warning fw-bolder'>Total Utilizado:</span> <span className='text-secondary fw-bolder'>{formatCurrency(project.cost)}</span>
                  </p>
                </Container>
              ) : (
                <Container className='mt-4'>
                  <Container >
                    <ProjectForm
                      handleSubmitProject={editPost}
                      btnText="Concluir Edição"
                      projectData={project}
                    />
                  </Container>
                </Container>
              )}


              {/* ===================================================================================== */}
            </Container>
            <Container>
              <Container className="pt-5">
                <Container>
                  <hr className='border-top border-warning px-3' />
                </Container>
                <Container className='d-flex justify-content-between gap-2 px-3'>
                  <h2 className='text-warning'>Adicione Serviço:</h2>
                  <div>
                    <Button variant="outline-warning" onClick={toggleServiceForm}>
                      {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                    </Button>
                  </div>
                </Container>
                <Container>
                  <div>
                    {showServiceForm && (
                      <ServiceForm
                        handleSubmitProject={createService}
                        btnText="Adicionar Serviço"
                        projectData={project}
                      />
                    )}
                  </div>
                </Container>
              </Container>
            </Container>


            <Container className='pt-2'>
              <Container className="pt-5">
                <Container>
                  <h2 className='text-warning'>Serviços:</h2>
                </Container>
                <Container>
                  {services.length > 0 &&
                    services.map(service => (
                      <ServiceCard
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.description}
                        key={service.id}
                        handleRemove={removeService}
                      />
                    ))
                  }
                  {services.length === 0 && <p>Não há serviços cadastrados</p>}
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      ) : (
        <Container className='px-5 pt-5'>
          <Container>
            <Container>
              <Spinner animation="border" variant="warning" />
              <span className="text-white"> &nbsp;
                &nbsp;Loading...</span>
            </Container>
          </Container>
        </Container>
      )}
    </>
  )
}

export default Project

/*
export 'default' (imported as 'Loader') was not found in 'react-loader-spinner' (possible exports: Audio, BallTriangle, Bars, Blocks, Circles, CirclesWithBar, ColorRing, Comment, Discuss, Dna, FallingLines, FidgetSpinner, Grid, Hearts, InfinitySpin, LineWave, MagnifyingGlass, MutatingDots, Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings, RotatingLines, RotatingSquare, RotatingTriangles, TailSpin, ThreeCircles, ThreeDots, Triangle, Vortex, Watch)
import defineConfig from '../../../vite.config';
import { Row } from 'react-bootstrap/Row';

*/