import { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import api from '../../services/api'


function ProjectForm() {

    const [validated, setValidated] = useState(false)
    const [category, setCategory] = useState([])
    

    useEffect(() => {
        const loadCategories = async () => {
            const { data } = await api.get("categories")

            setCategory(data)
        }
        
        loadCategories()
    }, [])

    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='d-flex justify-content-center'>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className='text-white fw-bolder'>Nome do projeto:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome do projeto"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor informe o nome do projto.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label className='text-white fw-bolder mt-4'>Orçamento do projeto:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Orçamento do projeto"
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor informe o orçamento do projto.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Form.Group as={Col} md="4" controlId="validationDefault04" required>
                    <Form.Label className='text-white fw-bolder mt-4'>Selecione um categoria:</Form.Label>
                    <Form.Select className="form-select" id="validationDefault04" required>
                        <option value="">Escolha uma categoria</option>
                        {category.map(cat => (
                            <option key={cat.id} className='text-white'>{cat.name}</option>
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
    )
}

export default ProjectForm
