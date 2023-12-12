
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { useState } from 'react';
import { db } from '../../services/firebaseConnection';
import {addDoc, collection, getDocs } from 'firebase/firestore';

const user = () => {
  {/*CONSTANTES:*/}
  const[nome, setNome] = useState()
  const[sobrenome, setSobrenome] = useState()
  const[idade, setIdade] = useState()

  {/*FUNÇÕES:*/}
  async function registerUser(e){
    e.preventDefault()
    {/*Salvar no Banco de Dados Firebase*/}
    try {
      const docRef = await addDoc(collection(db,'topicos'), {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
      })
      {/*LIMPAR CAMPOS:*/}
      setNome('')
      setSobrenome('')
      setIdade('')

      alert('Dados gravados no banco de dados!')
    } catch (error) {
      console.log(error)
    }
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