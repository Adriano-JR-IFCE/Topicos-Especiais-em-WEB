import { useEffect , useState} from 'react'
{/*Bibliotecas para a edição de usuários:*/}
import {useLocation} from 'react-router-dom'
import {Form, Button, Row, Col, Card} from 'bootstrap-4-react'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'


const EditUser = () => {
    {/*CONSTANTES:*/}
    const[nome, setNome] = useState('')
    const[sobrenome, setSobrenome] = useState('')
    const[idade, setIdade] = useState('')
    const location = useLocation()
    {/*Tem dentro do location um status chamado id?*/}
    const id = location?.state?.id 

    {/*Toda função que deve receber informação externa, deve ser async:*/}
    async function findOneUser(){
        if (id !== ''){
            const userRef = doc(db, 'topicos', id)
            await getDoc(userRef)
            .then((user)=>{
                setNome(user.data().nome),
                setSobrenome(user.data().sobrenome),
                setIdade(user.data().idade)
            })
            .catch((error)=>{
                {/*TEMPLATE LIBERO*/}
                alert('Erro ao buscar ${error} !')
            })
        }
    }

    {/*Responsável por atualizar os dados:*/}
    useEffect(()=>{
        findOneUser()
    }, [])

    async function handleEditSave(e){
        e.preventDefault()
        try {
            const docRef = doc(db, 'topicos', id)
            await updateDoc(docRef, {
                nome: nome,
                sobrenome: sobrenome,
                idade: idade
            })
            .then(()=>{
                alert('Dados atualizados!')
            })
        } catch (error) {
            alert('Erro ao editar dados')
        }
    }

    return (
        <>
            <div className="container">
                <Form>
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
                    <Button onClick={(e)=>handleEditSave(e)} primary type="submit">Atualizar</Button>
                </Form>
            </div>
        </>
    )
}

export default EditUser 
