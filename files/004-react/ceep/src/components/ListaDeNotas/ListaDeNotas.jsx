import React, { Component } from "react"
import CardNota from "../CardNota"
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
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
