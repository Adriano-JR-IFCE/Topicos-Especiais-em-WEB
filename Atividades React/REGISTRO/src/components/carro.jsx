import {BDiv } from 'bootstrap-4-react';


const MyCarro = (props) => {
    
    
    return (
        <>
            <br /><br />{/*RECEBE AS INFORMAÇÕES DO COMPONENTE TRANSPORTE*/}
            <div className="compoonent">
                <h1>
                    <BDiv mx="auto">
                        Informações
                    </BDiv>
                </h1>
                <h3>Potência: {props.potencia}</h3>
                <h3>Cor: {props.cor}</h3>
                <h3>Marca: {props.marca}</h3>
                <h3>Ano: {props.ano}</h3>
                <h3>Estado do carro: {props.estado}</h3>
            </div>
            <br /><br />
        </>
    )
}

export default MyCarro