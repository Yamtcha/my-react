import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import {Game} from '../Game'



export class App extends Component {

    render() {
    return (
    <div>
      <div className="header">
        <header className="App-header">
          <img className = "Logo" src = {logo} alt="logo"/>
          <h1>Kurtosys Horse Racing</h1>   
        </header> 
      </div>
      <Game />
    </div> 
    );
  }
}