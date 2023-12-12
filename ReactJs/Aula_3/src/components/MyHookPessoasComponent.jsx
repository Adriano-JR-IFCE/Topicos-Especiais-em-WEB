import { useState } from "react";

function MyHookPessoasComponent(){
    {/*Valor get: pessoas; Valor set: setPessoas.*/}
    const [pessoas] = useState(['Paulo', 'Maria', 'Ana'])
    
    return(
        <> 
            {/*Recebe pessoas: */}
            <p>Pessoas: {pessoas}</p>
        </>
    )
}

export default MyHookPessoasComponent