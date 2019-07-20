import React, { Component } from 'react'
//import axios from 'axios'
//import Button from '@material-ui/core/Button';

class OpeningHours extends Component{
 state={
 		list:[]
 }
componentDidMount=async()=>{
  const api_call = await fetch('https://www.getpostman.com/collections/aaedf5d90a04b24a2e7b');
  const response = await api_call.json();
  const A=response.requests[0].responses[0].text
  var B=JSON.parse( A.substring(1,85)) //returns "exce"
  var C=JSON.parse(A.substring(86,171))
  var D=JSON.parse(A.substring(172,259))
  var E=JSON.parse(A.substring(260,346))
  var F=JSON.parse(A.substring(347,431))
  var G=JSON.parse(A.substring(432,518))
  var H=JSON.parse(A.substring(519,603))
  //text.substring(2,4) //returns "ce"
  //B=A;
  //console.log(B)
  //var arr = JSON.parse("[" + B + "]");
  const array=[]
  array.push(B)
  array.push(C)
  array.push(D)
  array.push(E)
  array.push(F)
  array.push(G)
  array.push(H)
  //console.log(array[0].weekday)
 // const a=array[0].weekday
//console.log(typeof(a))
//console.log(a)
  this.setState({
  	list: array
  });
  console.log(this.state.list[1])
  }
render(){
	/*const {List}=this.state.list.map(curr=>{
  	return(
          <div className="collection-item" keys={curr.id}>
             <span> {curr.weekday}</span>
             <span className="right"> {curr.from_hour} {curr.to_hour}</span>
          </div >
  		)
  })*/
return(
         <div className="collection">
          <h3> Opening Hours of Store</h3>
             {  
            	this.state.list.map(curr=>{
            	    return(
                     <div className="collection-item" keys={curr.id}>
                       <span> {curr.weekday}</span>
                       <span className="right"> <b>from:-</b> {curr.from_hour} <b>to:-</b>{curr.to_hour}</span>
                     </div >
            		)
                })
            }
                 
         </div>
  		)
  }	
 }
 export default  OpeningHours