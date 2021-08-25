import React, { Component } from "react"
import CardNotas from "./CardNotas/CardNotas";


class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="card-notas">
        { Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => { 
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNotas/>
            </li>
          );
        })}
      </ul>
    );
  }

}

export default ListaDeNotas;