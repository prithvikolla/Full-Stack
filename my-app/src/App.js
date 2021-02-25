import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js';
import Mainboard from './components/Mainboard.js'

function App(){
  return (
    <div className = "app">
      <Header/>
      <Mainboard/>
    </div>

  )

}

export default App;

