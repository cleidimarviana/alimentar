import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
        
          <a
            className="App-link"
            href="https://github.com/cleidimarviana/ReactStrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>ReactStrap</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
