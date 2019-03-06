import React, { Component } from 'react';
import { Button, InputGroup, ListGroup, FormControl, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../assets/styles/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from '../alimentos.json';

class ModalSearchIngredient extends Component {

    state = {
        show: false,
        searchStr: '',
        locationResults: [],
        alimentos: []
    };


    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            searchStr: '',
            locationResults: [],
            alimentos: []
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
        this.state.alimentos.push(item);
        this.setState({ searchStr: "", alimentos: this.state.alimentos });
        this.state.locationResults = [];
        console.log(item);

    }
    render() {
        return (
            <div>
                <form>
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
                        <div className='Select-menu-outer'>{
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
                    </InputGroup>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Medida caseira</Form.Label>

                        <Form.Text className="text-muted">
                            Clique no botão abaixo para escolher um ingrediente:
                        </Form.Text>
                    </Form.Group>

                </form>

                <div className="actions">
                     <Button onClick={this.addTaskAction} className="btnForm" style={{ float: 'right' }} variant="primary" >Adicionar ingrediente</Button>
                     <Button onClick={this.cancelAdd} className="btnForm" variant="light" style={{ float: 'right' }}>Cancelar</Button>
                 
                </div>
            </div>
        )
    }
}
export default ModalSearchIngredient;
