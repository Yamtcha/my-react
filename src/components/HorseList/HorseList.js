import React, { Component } from 'react';
import './HorseList.css';
import data from './team'
import { Horse } from '../Horse/Horse';


export class HorseList extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { progress: 0 }
  }

  handleClick(move,login){ 

    if(!move === 75){
      this.setState({ progress: move + Math.random() * 100});
    }else{
       alert(login , "is the winner"); 
    }
  }

  
  render() {

   function GenerateHorse(value){
        let Random=[];
        while(Random.length < value){
           var randomnumber = Math.floor(Math.random()*29) + 1;
           if(Random.indexOf(randomnumber) > -1) continue;
           Random[Random.length] = randomnumber;
        }
        return Random;
    }

    function Color(index){
        var color = ["red","green","black","yellow"];
        var progressbar = [];
           for(let i = 0 ; i < index ; i++){
             progressbar.push(color[i]);
           }
      return progressbar;
    }

    console.log(Color(0));
    return (  
     
      
            <div className = "HorseList" > 
             {
              if (this.props.start){
               GenerateHorse(this.props.value).map((element, i) => { 
                  return  <Horse 
                            Login = {data[element].login}
                            Id = {data[element].id}
                            avator = {data[element].avatar_url} 
                            color = {Color(this.props.value)[i]}
                            progress = {handleClick(this.state.progress,data[element].login)}
                            /> 
                }          
              )
            }
          }
            </div>
      }
    )
  }
}
