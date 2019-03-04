import React, { Component } from 'react';
import '../assets/styles/scss/App.scss';
import { InputGroup, FormControl, Button, ListGroup, Table, Container, Modal, Overlay, Popover, OverlayTrigger } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from '../alimentos.json';

class Buscar extends Component {

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
      alimentos: [],
      show: false,
      itemPopover: {}
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


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

  handleClickItem(element){
    console.log(element);
    this.setState({itemPopover: element})
  }

  clickItemResult(item) {
    this.state.alimentos.push(item);
    this.setState({ searchStr: "", alimentos: this.state.alimentos });
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

  showTable() {
    this.setState({ display: 'none' });
  }

  handlerItemModal(element) {
    this.handleShow()
    console.log(element);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    const convertmcg = 0.001;

    var popover = (
      <Popover id="popover-basic" title={this.state.itemPopover.descricao}>
        <Table bordered>

  <tbody>
    {/* <tr>
      <td>DESCRIÇÃO NA REFERÊNCIA </td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ENERGIA (kcal)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>PROTEÍNA (g)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>LIPÍDEOS TOTAIS (g)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>CARBOIDRATO (g)</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>FIBRA ALIMENTAR TOTAL (g)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>CÁLCIO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>MAGNÉSIO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>MANGANÊS (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>FÓSFORO (mg)</td>  
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>FERRO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>SÓDIO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>SÓDIO DE ADIÇÃO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>POTÁSSIO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>COBRE (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ZINCO (mg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>SELÊNIO (mcg)</td>
      <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>RETINOL (mcg)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr> */}
    <tr>
      <td>VITAMINA A (EQUIVALENTE DE ATIVIDADE DE RETINOL) (mg)</td>
       <td>{this.state.itemPopover.vitamina_a_mcg * convertmcg}</td>
    </tr>
    <tr>
      <td>VITAMINA B - TIAMINA (mg)</td>
       <td>{this.state.itemPopover.vitamina_b_tiamina_mg}</td>
    </tr>
    <tr>
      <td>VITAMINA B2 - RIBOFLAVINA (mg)</td>
       <td>{this.state.itemPopover.vitamina_b2_riboflavina_mg}</td>
    </tr>
    <tr>
      <td>VITAMINA B3 -NIACINA (mg)</td>
       <td>{this.state.itemPopover.vitamina_b3_niacina_mg}</td>
    </tr>
    <tr>
      <td>VITAMINA B3 - EQUIVALENTE DE NIACINA (mg)</td>
       <td>{this.state.itemPopover.vitamina_b3_equivalente_niacina_mg}</td>
    </tr>
    <tr>
      <td>VITAMINA B6 - PIRIDOXINA (mg)</td>
       <td>{this.state.itemPopover.viamina_b12_pirodoxina_mcg}</td>
    </tr>
    <tr>
      <td>VITAMINA B12 - COBALAMINA (mg)</td>
       <td>{this.state.itemPopover.viamina_b12_cobalamina_mcg * convertmcg}</td>
    </tr>
    <tr>
      <td>VITAMINA C (mg)</td>
       <td>{this.state.itemPopover.vitamina_c_mg * convertmcg}</td>
    </tr>
    <tr>
      <td>VITAMINA D - CALCIFEROL- (mg)</td>
       <td>{this.state.itemPopover.vitamina_d_calciferonol_mcg * convertmcg}</td>
    </tr>
    <tr>
      <td>VITAMINA E - TOTAL DE ALPHA-TOCOPHEROL (mg)</td>
       <td>{this.state.itemPopover.vitamina_e_total_alpha_tocopheronol_mg}</td>
    </tr>
    {/* <tr>
      <td>COLESTEROL (mg)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDOS GRAXOS SATURADOS (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDOS GRAXOS MONOINSATURADOS (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDOS GRAXOS POLIINSATURADOS (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDO GRAXO POLIINSATURADO 18:2 (LINOLÉICO) (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDO GRAXO POLIINSATURADO 18:3 (LINOLÊNICO) (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>ÁCIDOS GRAXOS TRANS TOTAL (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>AÇÚCAR TOTAL (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr>
    <tr>
      <td>AÇÚCAR DE ADIÇÃO (g)</td>
       <td>{this.state.itemPopover.descricao_preparacao}</td>
    </tr> */}
  </tbody>
</Table>
      </Popover>
    );

    let energia = 0;
    let proteina = 0;
    return (

      <Container>
        <div>
          <div className="masthead__content">
            <div className="hc-masthead__search">
              {/* <h1 style={{ textAlign: 'center' }} className="heading__primary">ALIMENTAR</h1> */}
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
                    if (this.state.locationResults[i] === alimentos[key].descricao) {
                      var preparacao = (alimentos[key].descricao_preparacao !== 'NAO SE APLICA') ? alimentos[key].descricao_preparacao : '';
                      return <ListGroup.Item onClick={() => this.clickItemResult(alimentos[key])} action>{alimentos[key].descricao + " " + preparacao}</ListGroup.Item>;
                    }
                  }

                }.bind(this))
              }
              </ListGroup>
            </div>
          </div>

          <Table hidden={this.state.alimentos.length < 1} striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th >Alimento</th>
                <th>Energia (KCAL)</th>
                <th>Proteina(g)</th>
              </tr>
            </thead>
            <tbody>
              {

                this.state.alimentos.map((element, idx) => {

                  energia += parseFloat(element.energia_kcal);
                  proteina += parseFloat(element.proteina_g);

                  return <tr>
                    <td>{idx + 1}</td>

                    <td>
                      <OverlayTrigger trigger="click" overlay={popover} rootClose>
                        <a href="#" onClick={()=>this.handleClickItem(element)}>{element.descricao}</a>
                      </OverlayTrigger></td>
                    <td>{element.energia_kcal}</td>
                    <td>{element.proteina_g}</td>


                  </tr>
                })
              }
              <tr>
                <td style={{ border: 'none' }} colSpan="2"></td>
                <td style={{ fontWeight: '900' }}>{energia}</td>
                <td style={{ fontWeight: '900' }}>{proteina}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Buscar;
