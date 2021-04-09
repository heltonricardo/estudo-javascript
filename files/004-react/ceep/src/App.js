import React, { Component } from "react"
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/App.css"
import './assets/index.css'

class App extends Component {
constructor() {
  super()
  this.notas = []

  // Propriedade especial para renderizar novamente a página, quando ele é \
  // atualizado, o método render é automaticamente invocado
  this.state = { notas:[] }
}

  criacaoDeNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = { notas:novoArrayNotas }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criacaoDeNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    )
  }
}

export default App
