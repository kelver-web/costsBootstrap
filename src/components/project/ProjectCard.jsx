/* eslint-disable react/prop-types */

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import Button from 'react-bootstrap/esm/Button'
import styles from './ProjectCard.module.css'


function ProjectCard({ id, name, budget, category, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <Row className="px-4">
            <Col className="mb-4" style={{ width: '18em' }}>
                <Card className="card border border-warning border-3">
                    <Card.Body className="card-body">
                        <h4 className="card-title text-white fw-bolder">{name}</h4>
                        <p className="card-text text-white">
                            <span>Orçamento:</span> R${budget}
                        </p>
                        <p className={`${styles.category_text} text-white`}>
                            <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                        </p>
                        <div className="d-flex mt-5 gap-2 text-wrap">
                            <a href={`/project/${id}`} className='d-flex align-items-center justfy-content-center btn btn-outline-warning gap-2'>
                                <BsPencil className="icons"/> Editar
                            </a>
                            <Button onClick={remove} variant="outline-warning" className='d-flex align-items-center justfy-content-center gap-2'>
                                <BsFillTrashFill className="icons"/> Excluir
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>  
    )
}

export default ProjectCard
