import React, { Component, Fragment } from 'react';
import './App.css';
import ParentComp from './components/ParentComp';
import PureComp from './components/PureComp';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComp />
      </div>
    );
  }
}

export default App;
