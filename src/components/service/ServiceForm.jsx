/* eslint-disable react/prop-types */

import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import SubmitButton from '../form/SubmitButton';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { toast } from 'react-toastify';


function ServiceForm({ handleSubmitProject, btnText, projectData }) {

  const [service, setService] = useState({})
  const [validated, setValidated] = useState(false)


  function handleChangeInput(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  function handleChangeNumberInput(e) {
    setService({ ...service, [e.target.name]: parseFloat(e.target.value) })
  }


  const handleSubmit = async (event) => {

    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      setValidated(true);
      toast.error('Dados inválidos')

    } else {
      // enviar dados
      event.preventDefault()
      projectData.services.push(service)
      handleSubmitProject(projectData)
    }
  }


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='mb-5'>
        <Row className='d-flex justify-content-center'>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className='text-white fw-bolder mt-3'>Nome do serviço:</Form.Label>
            <Form.Control
              name='name'
              onChange={handleChangeInput}
              required
              type="text"
              placeholder="Nome do serviço"

            />
            <Form.Control.Feedback type="invalid">
              Por favor informe o nome do serviço.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label className='text-white fw-bolder mt-4'>Custo do serviço:</Form.Label>
            <Form.Control
              name='cost'
              onChange={handleChangeNumberInput}
              required
              type="number"
              placeholder="Custo do serviço"
            />
            <Form.Control.Feedback type="invalid">
              Por favor informe o custo do serviço.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className='text-white fw-bolder mt-4'>Descrição do serviço:</Form.Label>
            <Form.Control
              name='description'
              onChange={handleChangeInput}
              required
              type="text"
              placeholder="Descrição do serviço"
            />
            <Form.Control.Feedback type="invalid">
              Por favor informe a descrição do serviço.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className=' mt-4'>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <SubmitButton text={btnText}></SubmitButton>
          </Form.Group>
        </Row>
      </Form>
    </>
  )
}

export default ServiceForm
