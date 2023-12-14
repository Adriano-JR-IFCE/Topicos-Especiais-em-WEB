//Configuração de rotas:
//Necessário para o Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Navbar aqui deixa ela visível para todo o sistema.
import MyNavbar from './components/navbar'
//Abaixo é importação da página para ser usada no routes
import MyTrasporte from './components/transporte'



const RoutesApp = () => {
  return (
    <>
        {/*Formato das rotas:*/}
        <BrowserRouter> 
            <MyNavbar/>
            <Routes>
                {/*Rota Transporte*/}
                <Route path='/' element={<MyTrasporte/>}/>
                {/**/}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RoutesApp