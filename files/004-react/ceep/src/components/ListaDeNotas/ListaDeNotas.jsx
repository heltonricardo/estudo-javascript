import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

/*
 * Tudo que está entre chaves é interpretado como JavasScript.
 * Utilizamos a propriedade key para que todo componente tenha um identificador
 * único para ajudar o interpretador a identificar quais elementos já foram
 * renderizados e/ou sofreram alteração.
 */

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
