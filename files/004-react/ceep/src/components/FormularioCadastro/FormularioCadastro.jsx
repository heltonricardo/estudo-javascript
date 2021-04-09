import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  
  /*
   * preventDefault: impede o comportamento padrão de recarregar a página
   * stopPropagation: impede a propagação do evento por seus listeners
  */

  _handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.stopPropagation()
    evento.preventDefault()
    // Propriedade criada em App.js:
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
