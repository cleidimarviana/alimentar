import React, { Component } from 'react';
import './App.css';
import { InputGroup, FormControl, Button, ListGroup, Table, Container} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from './alimentos.json';

class App extends Component {

  state = {
    locationResults: [],
    searchStr: '',
    alimentos: []
  };

  constructor() {
    super();
    this.state = {
      locationResults: [],
      searchStr: '',
      alimentos: []
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
    this.state.alimentos.push(item);
    this.setState({ searchStr: "", alimentos:  this.state.alimentos });
    this.state.locationResults = [];
    console.log(item);

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  getLocalData = () => {
    return JSON.parse(localStorage.getItem('alimento'));
  }
  setLocalData = (arr) => {
      localStorage.setItem('alimento', JSON.stringify(arr));
  }

  showTable(){
    this.setState({ display: 'none' });
  }


  render() {

    let energia = 0;
    let proteina = 0;
    return (

      <Container>
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

        <Table hidden={this.state.alimentos.length< 1} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Alimento</th>
            <th>Energia (KCAL)</th>
            <th>Proteina(g)</th>
          </tr>
        </thead>
        <tbody>
        {
          
          this.state.alimentos.map((element, idx) => {

              energia+= parseFloat(element.energia_kcal);
              proteina+= parseFloat(element.proteina_g);
             
              return <tr>
                <td>{idx+1}</td>
                <td>{element.descricao}</td>
                <td>{element.energia_kcal}</td>
                <td>{element.proteina_g}</td>
            </tr>
          })
        }
        <tr>
            <td style= {{border: 'none'}} colspan="2"></td>
            <td style={{fontWeight: '900'}}>{energia}</td>
            <td style={{fontWeight: '900'}}>{proteina}</td>
          </tr>
         </tbody>
      </Table>        
      </div>
      </Container>
    );
  }
}

export default App;
