import { useState } from "react";

function MyHookComponent(){
    {/*Valor get: count; Valor set: stCount.*/}
    const [count, setCount] = useState(0)
    {/*Funções :*/}
    function incrementar(){
        if(count <= 9){
            setCount(count+1)
        }else{
            alert("Vc já atingiu o máximo!")
        }
    }
    function decrementar(){
        if(count == 0){
            alert("Vc já atingiu o minimo!")
            return false
        }else{
            setCount(count-1)
        }
    }
    return(
        <>  
            {/*Count sem restrição de min e máx:
                <button type="button" onClick={()=>setCount(count+1)}>Incrementar</button>
                <button type="button" onClick={()=>setCount(count-1)}>Decrementar</button>
                <div>Resultado: {count}</div>
            */}
            
            {/*Através de função: */}
            <button onClick={(e)=>incrementar(e.target.value)}>Incrementar</button>
            <button onClick={(e)=>decrementar(e.target.value)}>decrementar</button>
            <div>Resultado: {count}</div>
        </>
    )
}

export default MyHookComponent