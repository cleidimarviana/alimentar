import React, { Component } from 'react';
import { Button, InputGroup, ListGroup, FormControl, Form, Col, Tooltip } from 'react-bootstrap';
import '../assets/styles/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from '../alimentos.json';

class AddIngredient extends Component {

    state = {
        show: false,
        searchStr: '',
        locationResults: [],
        alimentos: [],
        itemDefaultValue: {},
        itemDescriptionValue: ''
    };
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            searchStr: '',
            locationResults: [],
            alimentos: [],
            itemDefaultValue: {},
            itemDescriptionValue: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
    }
    cancelAdd = () => {
        this.setState({ open: false });
        if (this.props.origin === 'modal')
            this.props.onHide({ show: false });
        else
            this.props.hiddenC();
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
    clickItemResult(item) {
        console.log(item.descricao);
        this.state.alimentos.push(item);
        this.setState({ searchStr: item.descricao, alimentos: this.state.alimentos, itemDefaultValue: item});
        this.state.locationResults = [];
        console.log(item);

    }
    render() {
        return (
            <div>
                    
<Form.Row>
                       
                       <Form.Group as={Col} xs="6" controlId="formGridCity">
                           <Form.Label>Alimento</Form.Label>
                           <Form.Control 
                            defaultValue= {this.state.itemDescriptionValue}
                            placeholder="Digite aqui o alimento..."
                            aria-label="Qual alimento você deseja buscar?"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.searchStr}
                            onChange={this.handleSearch}
                            autocomplete="off"
                            autoFocus />

                            <div hidden={this.state.locationResults.length < 1} className='Select-menu-outer'>{
                            Object.keys(alimentos).map(function (key) {

                                for (let i = 0; i < this.state.locationResults.length; i++) {
                                    if (this.state.locationResults[i] === alimentos[key].descricao) {
                                        var preparacao = (alimentos[key].descricao_preparacao !== 'NAO SE APLICA') ? alimentos[key].descricao_preparacao : '';
                                        return <ListGroup.Item onClick={() => this.clickItemResult(alimentos[key])} action>{alimentos[key].descricao + " " + preparacao}</ListGroup.Item>;
                                    }
                                }

                            }.bind(this))
                        }
                        </div>
                       </Form.Group>
                      
                       
                       <Form.Group as={Col} controlId="formGridState">
                           <Form.Label>Medida Caseira</Form.Label>
                           <Form.Control as="select">
                               <option>Choose...</option>
                               <option>...</option>
                           </Form.Control>
                       </Form.Group>
                       
                       <Form.Group as={Col} controlId="formGridZip">
                           <Form.Label>Quantidade</Form.Label>
                           <Form.Control />
                       </Form.Group>
                       </Form.Row>
                    <InputGroup size="lg">
                    
                        {/* <FormControl

                            placeholder="Qual alimento você deseja buscar?"
                            aria-label="Qual alimento você deseja buscar?"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.searchStr}
                            onChange={this.handleSearch}
                            autoFocus
                        /> */}
                        {/* <InputGroup.Append>
                            <Button type="submit" variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup.Append> */}
                        {/* <div className='Select-menu-outer'>{
                            Object.keys(alimentos).map(function (key) {

                                for (let i = 0; i < this.state.locationResults.length; i++) {
                                    if (this.state.locationResults[i] === alimentos[key].descricao) {
                                        var preparacao = (alimentos[key].descricao_preparacao !== 'NAO SE APLICA') ? alimentos[key].descricao_preparacao : '';
                                        return <ListGroup.Item onClick={() => this.clickItemResult(alimentos[key])} action>{alimentos[key].descricao + " " + preparacao}</ListGroup.Item>;
                                    }
                                }

                            }.bind(this))
                        }
                        </div> */}
                    </InputGroup>
{/* 
                <div className="actions">
                     <Button onClick={this.addTaskAction} className="btnForm" style={{ float: 'right' }} variant="primary" >Adicionar ingrediente</Button>
                     <Button onClick={this.cancelAdd} className="btnForm" variant="light" style={{ float: 'right' }}>Cancelar</Button>
                 
                </div> */}
            </div>
        )
    }
}
export default AddIngredient;
