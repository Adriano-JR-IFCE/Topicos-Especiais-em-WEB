//Configuração de rotas:
//Necessário para o Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Navbar aqui deixa ela visível para todo o sistema.
import MyNavbar from './components/navbar'
//Abaixo é importação da página para ser usada no routes
import MyDashboard from './pages/dashboard'
import MyUser from './pages/user'


const RoutesApp = () => {
  return (
    <>
        {/*Formato das rotas:*/}
        <BrowserRouter> 
            <MyNavbar/>
            <Routes>
                {/*Rota Dashboard*/}
                <Route path='/' element={<MyDashboard/>}/>
                {/*Rota User*/}
                <Route path='/user' element={<MyUser/>}/>
                {/**/}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RoutesApp