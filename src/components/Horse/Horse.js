import React, { Component } from 'react';
import './Horse.css';
import Progress from 'react-progressbar';

export class Horse extends Component {

constructor(props){
    super(props);
    this.state = {
      interval: Math.floor(Math.random() * 500),
      progress: 0,
    }
}

componentDidMount = () => {
    this.interval = setInterval(this.timer, this.state.interval);
}

timer = () => {
    this.setState({ progress: this.state.progress + 1 });
    console.log("anyhting");
    (this.state.progress >= 99) ? this.setState({ progress: 100 }) : "" ;  
}


  render(){
    return (
      < div className="RaceTrackBackground">
        <img className = "picture" id= {this.props.Id} src = {this.props.avator} alt = "avator"/> 
        <div className = "ProgressBar" >
        <Progress className = "Progress" color = {this.props.color} completed={this.state.progress}/>  
        </div>
      </div>
    );
  }
}
