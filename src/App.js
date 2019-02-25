import React, { Component } from 'react';
import './App.css';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from './alimentos.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      locationResults: [],
      searchStr: '',
    };


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {

    this.setState({ searchStr: event.target.value });
    this.state.locationResults = [];

    if (this.state.searchStr.length > 1) {
      for (let i = 0; i < alimentos.length; i++) {
        if (alimentos[i].descricao.toLowerCase().includes(this.state.searchStr.toLowerCase())) {
          if (!this.state.locationResults.includes(alimentos[i].descricao))
            this.state.locationResults.push(alimentos[i].descricao);
        }

      }
    }
  }

  clickItemResult(item){
    this.setState({ searchStr: "" });
    this.state.locationResults = [];
    console.log(item);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {

    return (

      <div>

        <div className="masthead__content">
          <div className="hc-masthead__search">
            <h1 style={{ textAlign: 'center' }} className="heading__primary">ALIMENTAR</h1>
            <form onSubmit={this.handleSubmit}>
              <InputGroup size="lg">
                <FormControl

                  placeholder="Qual alimento você deseja buscar?"
                  aria-label="Qual alimento você deseja buscar?"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.searchStr}
                  onChange={this.handleSearch}
                  autoFocus
                />
                <InputGroup.Append>
                  <Button type="submit" variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /></Button>
                </InputGroup.Append>
              </InputGroup>
            </form>
            <ListGroup>{
              Object.keys(alimentos).map(function (key) {

                for (let i = 0; i < this.state.locationResults.length; i++) {
                  if (this.state.locationResults[i] == alimentos[key].descricao) {
                    var preparacao = (alimentos[key].descricao_preparacao !== 'NAO SE APLICA') ? alimentos[key].descricao_preparacao : '';
                    return <ListGroup.Item onClick={()=>this.clickItemResult(alimentos[key])} action>{alimentos[key].descricao + " " + preparacao}</ListGroup.Item>;
                  }
                }

              }.bind(this))
            }
            </ListGroup>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
