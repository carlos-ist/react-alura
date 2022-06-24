import React, {Component} from "react";

//Para importar sem usar as chaves, usar o export default
// export default class...
export class ListaDeNotas extends Component {
    render(){
        return (
            <ul>
                <li>
                <section>
                    <header>
                    <h3>Titulo</h3>
                    </header>
                    <p>Escreva sua nota</p>
                </section>
                </li>
                <li>
                <section>
                    <header>
                    <h3>Titulo</h3>
                    </header>
                    <p>Escreva sua nota</p>
                </section>
                </li>
                <li>
                <section>
                    <header>
                    <h3>Titulo</h3>
                    </header>
                    <p>Escreva sua nota</p>
                </section>
                </li>
             </ul>
        )
    }
}