
import './App.css'
{/*Bibliotecas dos componentes:*/}
import MyFirstComponent from './components/MyFirstComponent'
import MyPropsComponent from './components/MyPropsComponent'
import MySecondComponent from './components/MySecondComponent'
import MyChaveComponent from './components/MyChaveComponent'
import MyHookComponent from './components/MyHookComponnt'
import MyHookPessoasComponent from './components/MyHookPessoasComponent'
MyHookPessoasComponent

function App() {

  return (
    <>
      <h1>Hello Word!!</h1>
      <h2>Olá Mundo!!</h2> 
      <br />
      {/*Assim se chama os components:*/}
      <MyFirstComponent/>
      <MySecondComponent/>

      {/*Agora chamando os components utilizando o recurso Props:*/}
      <MyPropsComponent name="Adriano"/>
      {/*Agora chamando os components utilizando o recurso das chaves:*/}
      <MyChaveComponent name="Adriano"/>
      {/*Contador:*/}
      <MyHookComponent/>
      <MyHookPessoasComponent/>
      {/**/}
    </>
  )
}

export default App
