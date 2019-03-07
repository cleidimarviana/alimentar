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

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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
                    
                    <AddIngredient></AddIngredient>

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Ingredientes</Form.Label>

                        <Row style={{ height: '60px' }}>

                            <Col className='item-receita'>
                                <Form.Control type="text" placeholder="Nome da receita" />
                            </Col>
                            <Col className='item-receita'>
                                testa
                            </Col>
                            <Col className='item-receita'>
                                teste
                            </Col>
                        </Row>

                        <Form.Text className="text-muted">
                            Clique no botão abaixo para escolher um ingrediente:
                        </Form.Text>
                        <Button onClick={this.handleShow} variant="light" size="sm">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button >
                    </Form.Group>

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