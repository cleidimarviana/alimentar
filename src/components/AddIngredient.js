import React, { Component } from 'react';
import { Button, InputGroup, ListGroup, Popover, Table, OverlayTrigger, Form, Col, Tooltip } from 'react-bootstrap';
import '../assets/styles/scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import alimentos from '../alimentos.json';

class AddIngredient extends Component {

    state = {
        searchStr: '',
        locationResults: [],
        alimentos: [],
        itemDescriptionValue: '',
        ingredientSelected: {},
        formMeasure: '',
        formQtde: '',
        item: {}
    };
    constructor(props, context) {
        super(props, context);

        this.state = {
            searchStr: '',
            locationResults: [],
            alimentos: [],
            itemDescriptionValue: '',
            ingredientSelected: {},
            formMeasure: '',
            formQtde: '',
            item: {}
        };

        this.handleSearch = this.handleSearch.bind(this);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });

        console.log(this.state);
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
        this.state.ingredientSelected = item;
        this.setState({ searchStr: item.descricao, alimentos: this.state.alimentos, ingredientSelected: item });
        this.state.locationResults = [];
        console.log(item);
    }

    selectIngredient() {

        var item = {
            qtde: this.state.formQtde,
            measure: this.state.formMeasure,
            ingredient: this.state.ingredientSelected
        }

        this.props.selectIngredient(item);        

        this.setState({formMeasure: '', formQtde: 1, item: {}});
    }
    getLocalData = () => {
        return JSON.parse(localStorage.getItem('ingredients'));
    }
    setLocalData = (arr) => {
        localStorage.setItem('ingredients', JSON.stringify(arr));
    }

    render() {
        const convertmcg = 0.001;

        var popover = (
            <Popover id="popover-basic" title={this.state.ingredientSelected.descricao}>
                <Table bordered>

                    <tbody>
                        {/* <tr>
          <td>DESCRIÇÃO NA REFERÊNCIA </td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ENERGIA (kcal)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>PROTEÍNA (g)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>LIPÍDEOS TOTAIS (g)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>CARBOIDRATO (g)</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>FIBRA ALIMENTAR TOTAL (g)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>CÁLCIO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>MAGNÉSIO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>MANGANÊS (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>FÓSFORO (mg)</td>  
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>FERRO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>SÓDIO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>SÓDIO DE ADIÇÃO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>POTÁSSIO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>COBRE (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ZINCO (mg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>SELÊNIO (mcg)</td>
          <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>RETINOL (mcg)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr> */}
                        <tr>
                            <td>VITAMINA A (EQUIVALENTE DE ATIVIDADE DE RETINOL) (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_a_mcg ? this.state.ingredientSelected.vitamina_a_mcg * convertmcg : this.state.ingredientSelected.vitamina_a_mcg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B - TIAMINA (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_b_tiamina_mg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B2 - RIBOFLAVINA (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_b2_riboflavina_mg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B3 -NIACINA (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_b3_niacina_mg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B3 - EQUIVALENTE DE NIACINA (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_b3_equivalente_niacina_mg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B6 - PIRIDOXINA (mg)</td>
                            <td>{this.state.ingredientSelected.viamina_b12_pirodoxina_mcg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA B12 - COBALAMINA (mg)</td>
                            <td>{this.state.ingredientSelected.viamina_b12_cobalamina_mcg * convertmcg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA C (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_c_mg * convertmcg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA D - CALCIFEROL- (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_d_calciferonol_mcg * convertmcg}</td>
                        </tr>
                        <tr>
                            <td>VITAMINA E - TOTAL DE ALPHA-TOCOPHEROL (mg)</td>
                            <td>{this.state.ingredientSelected.vitamina_e_total_alpha_tocopheronol_mg}</td>
                        </tr>
                        {/* <tr>
          <td>COLESTEROL (mg)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDOS GRAXOS SATURADOS (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDOS GRAXOS MONOINSATURADOS (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDOS GRAXOS POLIINSATURADOS (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDO GRAXO POLIINSATURADO 18:2 (LINOLÉICO) (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDO GRAXO POLIINSATURADO 18:3 (LINOLÊNICO) (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>ÁCIDOS GRAXOS TRANS TOTAL (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>AÇÚCAR TOTAL (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr>
        <tr>
          <td>AÇÚCAR DE ADIÇÃO (g)</td>
           <td>{this.state.ingredientSelected.descricao_preparacao}</td>
        </tr> */}
                    </tbody>
                </Table>
            </Popover>
        );
        return (
            <div>

                <Form.Row className='add-ingredient'>

                    <Form.Group as={Col} controlId="formQtde">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control key="formQtde" value={this.state.value} onChange={this.handleChange.bind(this)} size="sm" defaultValue='1' type='number' />
                    </Form.Group>
                    <Form.Group as={Col} xs="4" controlId="formMeasure">
                        <Form.Label>Medida Caseira</Form.Label>
                        <Form.Control key="formMeasure" value={this.state.value} onChange={this.handleChange.bind(this)} size="sm" as="select">
                            <option value='0'>Escolha uma opção...</option>
                            <option value='g'>Grama(s)(g)</option>
                            <option value='kg'>Kilograma(s)(kg)</option>
                            <option value='l'>Litro(s)(l)</option>
                            <option value='ml'>Mililitro(s)(ml)</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} xs="6" controlId="formIngredient">
                        <Form.Label>Alimento</Form.Label>
                        <a target='_blank' href='https://ww2.ibge.gov.br/home/estatistica/populacao/condicaodevida/pof/2008_2009_composicao_nutricional/default_zip.shtm' style={{ marginTop: '4px', float: 'right', fontSize: '11px' }}>Infomaçoes alimentares base IBGE</a>

                        <InputGroup>
                            <Form.Control key="formIngredient" size="sm"
                                defaultValue={this.state.itemDescriptionValue}
                                placeholder="Digite aqui o alimento..."
                                aria-label="Qual alimento você deseja buscar?"
                                aria-describedby="inputGroup-sizing-sm"
                                value={this.state.searchStr}
                                onChange={this.handleSearch}
                                autocomplete="off"
                                autoFocus />
                            {/* <InputGroup.Prepend hidden={this.state.itemDefaultValue === null}>
                                <InputGroup.Text id="inputGroupPrepend">
                                    <OverlayTrigger trigger="click" overlay={popover} rootClose>
                                        <a href="#">info</a>
                                    </OverlayTrigger>
                                </InputGroup.Text>
                            </InputGroup.Prepend> */}
                        </InputGroup>

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

                    <div className="actions">
                        <Button size="sm" onClick={() => this.selectIngredient()} className="btnForm" style={{ float: 'right' }} variant="primary" >Adicionar ingrediente</Button>
                        <Button size="sm" onClick={() => this.props.show()} className="btnForm" variant="light" style={{ float: 'right' }}>Cancelar</Button>

                    </div>

                </Form.Row>

               

            </div>
        )
    }
}
export default AddIngredient;
