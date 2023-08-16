/* eslint-disable react/prop-types */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { BsFillTrashFill } from 'react-icons/bs'
import Button from 'react-bootstrap/esm/Button'


import formatCurrency from '../../utils/formatCurrency'
import { Container } from 'react-bootstrap'



function ServiceCard({ id, name, cost, description, handleRemove }) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <Container className='px-0'>
        <Row className="">
            <Col className="mb-4" style={{ width: '18em' }}>
              <Card className="card border border-warning border-3">
                <Card.Body className="card-body">
                  <h4 className="card-title text-white fw-bolder">{name}</h4>
                  <p>
                    <span className='text-warning fw-bolder'>Custo total:</span> <span className='text-secondary fw-bolder'>{formatCurrency(cost)}</span>
                  </p>
                  <p className='text-warning fw-bolder'>Descrição: <span className='text-secondary fw-bolder'>{description}</span></p>
                  <div className="d-flex mt-5 gap-2 text-wrap">
                    <Button onClick={remove} variant="outline-warning" className='d-flex align-items-center justfy-content-center gap-2'>
                      <BsFillTrashFill className="icons" /> Excluir
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ServiceCard
