import React, { Component } from 'react';
import './Game.css';
import {HorseList}  from '../HorseList'


export class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { value:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
      if(event.target.value > 4 || isNaN(event.target.value) ){
          alert("The amount of entered horses are invalid")
      }else{
       this.setState({value: event.target.value});
      }
  }
  
  render()
  {
    return (
      <section id="hourse">
      <div className="Background">
        <h3> Welcome to kurtosys horse racing :</h3>
        <p>Enter the number of horses (maximum is 4)</p>
        <input type ="text" value = {this.state.value} onChange={this.handleChange}/>
        <button id = "StartRace" onClick ={this.handleClick} >Start Race</button>
        <div>
        <div className = "Race" >
            <HorseList value = {this.state.value} />
      </div>
        </div>   
      </div>
      </section>
    );
  }
}