import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import api from '../../services/api'
import { toast } from 'react-toastify';



function ProjectForm({ handleSubmitProject, projectData }) {

    const [project, setProject] = useState(projectData || {})
    const [category, setCategory] = useState([])
    const [validated, setValidated] = useState(false)


    function handleChangeInput(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleChangeNumberInput(e) {
        setProject({ ...project, [e.target.name]: parseFloat(e.target.value) })
    }

    function handleChangeCategoy(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    useEffect(() => {
        const loadCategories = async () => {
            const { data } = await api.get("categories")

            setCategory(data)
        }

        loadCategories()
    }, [])


    const handleSubmit = async (event) => {

        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            setValidated(true);
            toast.error('Dados inválidos')

        } else {
            // enviar dados
            event.preventDefault();
            event.stopPropagation();
            handleSubmitProject(project)
        }
    }


    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='mb-5'>
                <Row className='d-flex justify-content-center'>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label className='text-white fw-bolder'>Nome do projeto:</Form.Label>
                        <Form.Control
                            name='name'
                            onChange={handleChangeInput}
                            required
                            type="text"
                            placeholder="Nome do projeto"

                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor informe o nome do projeto.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='text-white fw-bolder mt-4'>Orçamento do projeto:</Form.Label>
                        <Form.Control
                            name='budget'
                            onChange={handleChangeNumberInput}
                            required
                            type="number"
                            placeholder="Orçamento do projeto"

                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor informe o orçamento do projeto.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Form.Group as={Col} md="4" controlId="validationDefault04" required>
                        <Form.Label className='text-white fw-bolder mt-4'>Selecione um categoria:</Form.Label>
                        <Form.Select className="form-select" id="validationDefault04"
                            name='category'
                            onChange={handleChangeCategoy}
                            required
                        >
                            <option value="" className='text-secondary'>Escolha uma categoria</option>
                            {category.map(cat => (
                                <option key={cat.id} value={cat.id} className='text-white'>{cat.name}</option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Por favor selecione uma categoria.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Button type="submit" variant="outline-warning">Criar Projeto</Button>
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

ProjectForm.propTypes = {
    handleSubmitProject: PropTypes.func,
    projectData: PropTypes.string
}

export default ProjectForm
