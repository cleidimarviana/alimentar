import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';

class App extends Component {


    render() {

        return (
            <Navbar className='navbar navbar-inverse  navbar-light bg-light'>
             <div className="container">
                <Link to="/"><Navbar.Brand href="#">
                <span className="heading__primary">ALIMENTAR</span>
                </Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Nav.Link> <Link to="/sobre">Sobre</Link></Nav.Link>
                    <Nav.Link><Link to="/cursos">Cursos</Link> </Nav.Link>
                    <Nav.Link><Link to="/buscar">Buscar</Link> </Nav.Link>

                </Nav>
                <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button> */}

                    <Link to="/adicionar"><Button variant="primary">Adicionar Receita</Button></Link>
                </Form>
                </div>
            </Navbar>
        );
    }
}

export default App;
// import React, { Component } from 'react';
// import './../App.css';
// import { Link } from 'react-router-dom'
// import {Nav, Navbar, FormControl, Button, Form} from 'react-bootstrap';


// class Toolbar extends Component {
//     render() {
//         return (
//             <Navbar bg="light" variant="light">
//                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                 <Nav className="mr-auto">
//                     <Link>Home</Link>
//                     <Link to='/sobre'>Sobre</Link >
//                     <Link>Pricing</Link>
//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-primary">Search</Button>
//                 </Form>
//             </Navbar>
//         );
//     }
// }

// export default Toolbar;
