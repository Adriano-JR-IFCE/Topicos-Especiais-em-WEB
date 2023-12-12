function MyPropsComponent(props){
    return(
        <>
            {/*Chamada pro props:*/}
            <h2>My Name is {props.name}</h2>
            {/*Para chamar mais parametros, só adicionar mais linhas .parametro*/}
        </>
    )
}

export default MyPropsComponent