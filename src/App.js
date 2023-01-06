import './App.css';
import React, { Component } from 'react';

import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();

    //const novoComentario = {
     //nome: 'Maria',
      //email: 'maria@email.com',
      //data: new Date(),
      //mensagem: 'Olá pessoal!!'
    //}
    const novoComentario = { ...this.state.novoComentario, data: new Date }
    
   this.setState({
    comentarios: [...this.state.comentarios, novoComentario],
    novoComentario: { nome: '', email:'', mensagem:'' }
   })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario )
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const {name, value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render() {
  return (
      <div className="App">
        <h1>React - Kevin Soffa</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
              type="text" 
              name="nome"
              onChange={this.digitacao}
              required
              value={this.state.novoComentario.nome}
              placeholder="Digite seu nome">
            </input>
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              onChange={this.digitacao}
              required
              value={this.state.novoComentario.email}
              placeholder="Digite seu email">
            </input>
          </div>
          <div>
            <textarea 
            name="mensagem"
            onChange={this.digitacao}
            required
            value={this.state.novoComentario.mensagem}
            rows="4"></textarea>
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
