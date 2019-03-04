import React, { Component } from 'react';
import '../assets/styles/scss/App.scss';
import { Link } from 'react-router-dom';

import { Row, Navbar, FormControl, Button, Form } from 'react-bootstrap';


class AdicionarReceita extends Component {
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

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ingredientes</Form.Label>
                        <Form.Control type="text" placeholder="Nome da receita" />
                        <Form.Text className="text-muted">
                            Insira aqui o nome da receita
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                </Button>
                </Form>
            </div>
        );
    }
}

export default AdicionarReceita;