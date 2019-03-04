import React, { Component } from 'react';
import './assets/styles/scss/App.scss';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <section className="section">
        <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

export default App;