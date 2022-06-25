import React, {Component} from "react";
import CardNota from "./CardNota";


//Para importar sem usar as chaves, usar o export default
// export default class...
class ListaDeNotas extends Component {
    render(){
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria,index) => {
                    return (
                        <li  key={index}>
                            <h1><div>{categoria}</div></h1>
                            <CardNota/>
                        </li>
                    )
                })}
             </ul>
        )
    }
}

export default ListaDeNotas;