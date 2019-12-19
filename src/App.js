import React from 'react';
// import logo from './logo.svg';

function TarefaLista(props) {
    // const titulo = props.title;
    // const dados = props.data;
    const {title, data} = props;
    console.log(props)
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

const Tarefa = (propriedades) => {
  return (<form onSubmit={propriedades.onSubmit}>
    <p>{propriedades.title}</p>
    <input
      type="text" 
      value={propriedades.text} 
      onChange={propriedades.onChange}
    />
    <button type="submit">
        Criar nova tarefa
    </button>
  </form>);
}

class App extends React.Component {
  state = {
    tarefas: [
      "Aula de componentes",
      "Aula sobre propriedades e estados",
      "Outra aula sobre UI"
    ],
    text: "Minha nova tarefa"
  };
  // constructor(props) {
  //   super(props);
  //   this.state = [];
  // }

  onChangeText(text) {
    this.setState({text});
  }

  handleChangeText(texto) {
    this.setState({text: texto})
  }

  addTask() {
    const {tarefas, text} = this.state;
    tarefas.push(text);
    this.setState({
      tarefas: tarefas,
      text: "Texto da nova tarefa"
    })
  }

  render() {
    return (
      <div>
        <TarefaLista 
          data={this.state.tarefas} 
          title="Minha lista de tarefas" 
        />
        <Tarefa 
          title="Nova tarefa" 
          text={this.state.text}
          onChange={(event) => this.handleChangeText(event.target.value)}
          onSubmit={(event) => {
            event.preventDefault();
            this.addTask();
          }}
        />
      </div>
    );
  }
}

export default App;