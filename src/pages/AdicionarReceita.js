import React, { Component } from 'react';
import '../assets/styles/scss/App.scss';
import { Link } from 'react-router-dom';

import { Modal, Navbar, FormControl, Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalSearchIngredient from '../components/ModalSearchIngredient';
import AddIngredient from '../components/AddIngredient';


class AdicionarReceita extends Component {

    constructor(props, context) {
        super(props, context);

        this.showAddIngredient = this.showAddIngredient.bind(this);
        this.dismissAddIngredient = this.dismissAddIngredient.bind(this);

        this.selectIngredient = this.selectIngredient.bind(this);


        this.state = {
            showAddIngredient: false,
            ingredientSelected: {},
            ingredients: []
        };
    }

    dismissAddIngredient() {
        this.setState({ showAddIngredient: false });
    }

    showAddIngredient() {
        this.setState(function (prevState) {
            return { showAddIngredient: !prevState.showAddIngredient };
        });
    }
    selectIngredient(ingredient){

        var list = this.state.ingredients;

        list.push(ingredient);
       
        this.setState({ ingredients: list });

        console.log(list);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome da receita</Form.Label>
                        <Form.Control type="text" placeholder="Nome da receita" />
                        <Form.Text className="text-muted">
                            Insira aqui o nome da receita
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label >Ingredientes</Form.Label>
                        <Button onClick={this.showAddIngredient} variant="light" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button >
                        {this.state.showAddIngredient ? <AddIngredient
                            show={this.showAddIngredient} selectIngredient={this.selectIngredient}
                        >
                        </AddIngredient> : null}

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">

                        <Form.Text className="text-muted">
                            Clique no botão abaixo para escolher um ingrediente:
                        </Form.Text>

                    </Form.Group>

                    {this.state.ingredients.map((item, index) => (
                        <div  key={index}> { item.qtde + item.measure+" de "+ item.ingredient.descricao}</div>
                    ))}


                    <Button variant="primary" type="submit">
                        Salvar
                </Button>
                </Form>

                
              
              

                <Modal
                    backdrop="static"
                    show={this.state.show}
                    onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textSize: "14px" }}>Buscar ingrediente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalSearchIngredient origin="modal" onHide={this.handleClose}></ModalSearchIngredient>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default AdicionarReceita;