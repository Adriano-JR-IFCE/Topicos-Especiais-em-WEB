
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { useState } from 'react';

const user = () => {
  {/*CONSTANTES:*/}
  const[nome, setNome] = useState()
  const[sobrenome, setSobrenome] = useState()
  const[idade, setIdade] = useState()

  {/*FUNÇÕES:*/}
  function registerUser(e){
    e.preventDefault()
    alert('Nome Completo: '+nome+' '+sobrenome)
  }
  

  return (
    <>
      <div className="container">
        <Form onSubmit={registerUser}>
          {/*NOME*/}
          <Form.Group>
            <Row>
              <Col col='sm-6'>
                <label>Nome</label>
                {/*onChange se refere a um evento, no caso (e):*/}
                <Form.Input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
              </Col>
            </Row>            
          </Form.Group>
          {/*SOBRENOME*/}
          <Form.Group>
            <Row>
              <Col col='sm-6'>
                <label>Sobrenome</label>
                <Form.Input type="text" value={sobrenome} onChange={(e)=>setSobrenome(e.target.value)} />
              </Col>
            </Row>            
          </Form.Group>
          {/*IDADE*/}
          <Form.Group>
            <Row>
              <Col col='sm-6'>
                <label>Idade</label>
                <Form.Input type="text" value={idade} onChange={(e)=>setIdade(e.target.value)} />
              </Col>
            </Row>            
          </Form.Group>
          <Button primary type="submit">Salvar</Button>
        </Form>
      </div>
    </>
  )
}

export default user