import React, { Component } from 'react';
import logo from './logo.svg';

import Hero from './Hero';
import Footer from './Footer';

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
