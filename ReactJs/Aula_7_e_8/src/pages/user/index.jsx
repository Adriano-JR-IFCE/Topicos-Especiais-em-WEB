
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebaseConnection';
import {addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';

const user = () => {
  {/*CONSTANTES:*/}
  const[nome, setNome] = useState()
  const[sobrenome, setSobrenome] = useState()
  const[idade, setIdade] = useState()
  {/*CONST QUE FAZ USO DA LISTA:*/}
  const [users, setUsers] = useState([])

  {/*FUNÇÕES:*/}
  async function findAllUsers(){{/*FUNÇÃO PARA BUSCAR TODOS OS USUÁRIOS NO BANCO:*/}
    const usersRef = collection(db, 'topicos')
    await getDocs(usersRef)
    .then((snapshot)=>{
      {/*A LISTA FICA DENTRO DA FUNÇÃO:*/}
      let lista = []
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          sobrenome: doc.data().sobrenome,
          idade: doc.data().idade
        })
      })
      setUsers(lista)
    })
  }
  {/*FUNÇÃO PARA LISTAR OS USUÁRIOS:*/}
  useEffect(()=>{
    findAllUsers()
  },[users])

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
  {/*FUNÇÃO PARA DELETAR OS USUÁRIOS:*/}
  async function handleDelete(id){
    const docRef = doc(db, 'topicos', id)
    await deleteDoc(docRef)
    .then(() => {
      alert('Usuário Deletado!')
    })
    .catch(()=>{
      alert('Erro ao deletar!')
    })
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
        {/*Renderiza a lista abaixo do <form>*/}
        <div className="containet-table">
          <br />
          <h3>Lista de usuários Registrados</h3>
          <ol>
            
          </ol>
          {
            users.map((item) => (
              <li className='lista' key={item.id}>
              <b>Nome: </b> {item.nome} 
              <b> Sobrenome: </b> {item.sobrenome} 
              <b> Idade: </b> {item.idade} 
              <button  onClick={()=>handleDelete(item.id)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </button>
              </li>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default user