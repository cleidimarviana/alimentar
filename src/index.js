import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/scss/index.scss';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Sobre from './pages/Sobre';
import Cursos from './pages/Cursos';
import Home from './pages/Home';
import AdicionarReceita from './pages/AdicionarReceita';
import Buscar from './pages/Buscar';


ReactDOM.render(
    <BrowserRouter>
        <App>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/sobre" component={Sobre} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/adicionar" component={AdicionarReceita} />
            <Route path="/buscar" component={Buscar} />
        </Switch>
        </App>
    </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
