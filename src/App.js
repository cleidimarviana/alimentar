import React, { Component } from 'react';
import './App.css';
import { ListGroup } from 'react-bootstrap';
import alimentos from './alimentos.json';

class App extends Component {
  render() {
    return (
      <div>
       <ListGroup>

              {
                Object.keys(alimentos).map(function(key) {
                  return <ListGroup.Item>{alimentos[key].descricao}</ListGroup.Item>
                }.bind(this))
              }

      </ListGroup>
          <a href="https://ww2.ibge.gov.br/home/default.php"> Dados: IBGE (Tabelas de Composição Nutricional dos Alimentos Consumidos no Brasil)</a>
      </div>
    );
  }
}

export default App;
