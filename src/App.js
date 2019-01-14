import React, { Component } from 'react';
import Gallery from './Gallery/Gallery.js';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App" >
          <Gallery  ScrollWidth={window.innerWidth} />
      </div>
    );
  }
}

export default App;
