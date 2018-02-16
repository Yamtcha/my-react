import React, { Component } from 'react';
import './HorseList.css';
import data from './team'
import { Horse } from '../Horse/Horse';


export class HorseList extends Component {

  constructor(props){
    super(props)
    this.state = { progress: 0 }
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

   
    return (  
            <div className = "HorseList" > 
            {  
               GenerateHorse(this.props.value).map((element, i) => { 
                  return  <Horse 
                            Login = {data[element].login}
                            Id = {data[element].id}
                            avator = {data[element].avatar_url} 
                            color = {Color(this.props.value)[i]}
                            progress = {5}
                            /> 
                }          
              )
          }   
            </div>
    )
 
}
}
