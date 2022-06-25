import React, {Component} from "react";
import CardNota from "./CardNota";


//Para importar sem usar as chaves, usar o export default
// export default class...
class ListaDeNotas extends Component {
    render(){
        return (
            <ul>
                <li>
                    <CardNota/>
                </li>
                <li>
                    <CardNota/>
                </li>
                <li>
                    <CardNota/>
                </li>
             </ul>
        )
    }
}

export default ListaDeNotas;