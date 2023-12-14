import { Form, Button, Row, Col } from 'bootstrap-4-react';

const MyCadastro = () => {
  return (
    <>
      <div className="container">
        <Form>
          {/*POTÊNCIA*/}
          <Form.Group>
            <Row>
              <Col className='sm-6'>
                <label>Potência</label>
                <Form.Input type="text"/>
              </Col>
            </Row>
          </Form.Group>
          {/*ANO*/}
          <Form.Group>
            <Row>
              <Col className="sm-6">
                <label>Ano</label>
                <Form.Input type="text"/>
              </Col>
            </Row>
          </Form.Group>
          {/*MARCA*/}
          <Form.Group>
            <Row>
              <Col className="sm-6">
                <label>Marca</label>
                <Form.Input type="text"/>
              </Col>
            </Row>
          </Form.Group>
          {/*COR*/}
          <Form.Group>
            <Row>
              <Col className="sm-6">
                <label>Cor</label>
                <Form.Input type="text"/>
              </Col>
            </Row>
          </Form.Group>
          {/**/}
          {/*BOTÃO*/}
          <Button primary type="submit">Usar carro</Button>
          <Button primary type="reset"  className="ml-3">Limpar Dados</Button>
        </Form>
      </div>
        
    </>
  )
}

export default MyCadastro