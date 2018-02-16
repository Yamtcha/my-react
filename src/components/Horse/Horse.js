import React, { Component } from 'react';
import './Horse.css';
import Progress from 'react-progressbar';

export class Horse extends Component {

  render(){
    return (
      < div className="RaceTrackBackground">
        <img className = "picture" id= {this.props.Id} src = {this.props.avator} alt = "avator"/> 
        <div className = "ProgressBar" >
        <Progress className = "Progress" color = {this.props.color} completed={75}/>  
        </div>
      </div>
    );
  }
}
