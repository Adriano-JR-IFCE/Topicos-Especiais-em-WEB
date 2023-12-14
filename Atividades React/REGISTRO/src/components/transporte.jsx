import { useState } from "react"
import { Form, Button, Row, Col} from 'bootstrap-4-react';
import MyCarro from "./carro";

const MyTrasporte = () => {
  {/*CONSTANTES*/}
  const [estado_carro, setEstado] = useState("sem dados!")
  const [potencia, setPotencia] = useState()
  const [ano, setAno] = useState()
  const [marca, setMarca] = useState()
  const [cor, setCor] = useState()

  {/*FUNÇÃO ACELERANDO*/}
  function acelerando(){
    setEstado("o carro está acelerando!")
  }
  {/*FUNÇÃO DESACELERANDO*/}
  function desacelerando(){
    setEstado("o carro está desacelerando!")
  }
  {/*FUNÇÃO LIMPAR CAMPOS*/}
  function limpar_campos(){
    setAno("")
    setMarca("")
    setCor("")
    setPotencia("")
    setEstado("sem dados!")

  }
  
  return (
    <>
      <div className="container">
        <br /> <br />
        <Row>
          <Col className="col-6">
            <Form>
            {/*POTÊNCIA*/}
            <Form.Group>
              <Row>
                <Col className='sm-6'>
                  <label>Potência</label>
                  <Form.Input type="text" value={potencia} onChange={(e)=>setPotencia(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
            {/*ANO*/}
            <Form.Group>
              <Row>
                <Col className="sm-6">
                  <label>Ano</label>
                  <Form.Input type="text" value={ano} onChange={(e)=>setAno(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
            {/*MARCA*/}
            <Form.Group>
              <Row>
                <Col className="sm-6">
                  <label>Marca</label>
                  <Form.Input type="text" value={marca} onChange={(e)=>setMarca(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
            {/*COR*/}
            <Form.Group>
              <Row>
                <Col className="sm-6">
                  <label>Cor</label>
                  <Form.Input type="text" value={cor} onChange={(e)=>setCor(e.target.value)} />
                </Col>
              </Row>
            </Form.Group>
            {/**/}
            
            {/*BOTÃO LIMPAR*/}
            <Button primary className="ml-3" onClick={(e)=>limpar_campos(e.target.value)}>Limpar Dados</Button>
            {/*FUNÇÕES DO CARRO*/}
            <Button primary type="button" className="ml-3" onClick={(e)=>acelerando(e.target.value)}>Acelerar</Button>
            <Button primary type="button" className="ml-3" onClick={(e)=>desacelerando(e.target.value)}>Desacelerar</Button>
          </Form>
          </Col>

          <Col className="col-6">
            {/*Agora chamando os components utilizando o recurso Props:*/}
            <MyCarro estado = {estado_carro} potencia = {potencia} cor = {cor} marca = {marca} ano = {ano}/>
         
          </Col>
        </Row>
        
      </div>
    </>
  )
}

export default MyTrasporte