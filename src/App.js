import React from 'react';
import logo from './logo.svg';

const tarefas = [
  "Aula de componentes",
  "Aula sobre propriedades e estados",
  "Outra aula sobre UI"
];

class TarefaLista extends React.Component {
  render() {
    const titulo = this.props.title;
    const dados = this.props.data;
    const {title, data} = this.props;
    console.log(this.props)
    return (
      <div>
        <p>
          {title}
        </p>

        <ul>
          {data.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

const Tarefa = (propriedades) => {
  return (<div>
    <p>{propriedades.title}</p>
    <input type="text"></input>
    <button type="submit">Criar nova tarefa</button>
  </div>);
}

class App extends React.Component {
  state = {tarefas:[
    "Aula de componentes",
    "Aula sobre propriedades e estados",
    "Outra aula sobre UI"
  ],
  text: "Minha nova terefa"
};

    onChanged
    render(){
      return(
        <div>
          <TarefaLista data={this.state.tarefas} tittle = "Minhas terefas"></TarefaLista>
          <Tarefa title="minha nova tarefa" text={this.state.tarefas} onChanged={(text)}></Tarefa>       
        </div>
         );
      }
    }



export default App;
