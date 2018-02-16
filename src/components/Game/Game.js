import React, { Component } from 'react';
import './Game.css';
import {HorseList}  from '../HorseList'


export class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state ={id:'' , move :'' , login:''  }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
    
  }
  
  handleChange(event) {
      if(event.target.value > 4 || isNaN(event.target.value) ){
          alert("The amount of entered horses are invalid")
      }else{
        this.setState({value: event.target.value});
        event.preventDefault();
      }
  }
  
  handleClick(move,login){ 

    if(!move === 75){
      this.setState({ progress: move + Math.random() * 10});
    }else{
       alert(login , "is the winner"); 
    }
  }

  render() {
    return (
      <section id="hourse">
      <div className="Background">
        <h3> Welcome to kurtosys horse racing :</h3>
        <p>Enter the number of horses (maximum is 4)</p>
        <input type ="text" value = {this.state.value} onChange={this.handleChange}/>
        <button id = "StartRace" onClick ={this.handleClick} >Start Race</button>
        <div>
        <div className = "Race" >
            <HorseList value = {this.state.value} handle ={this.handleClick()}/>
      </div>
        </div>   
      </div>
      </section>
    );
  }
}