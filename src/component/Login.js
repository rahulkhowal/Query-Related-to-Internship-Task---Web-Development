import React,{Component} from 'react'
import axios from 'axios'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import '../App.css'
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core'
//import Dashboard from './Dashboard'
const cookies = new Cookies();
const STYLES= theme=>({
  input:{
    position:'relative',
    left: '20%'
  }
})
class Login extends  Component{
	constructor(props){
     super(props)
     this.state={
     	email:'',
		password:''
     }
	}
	
	handleSubmit= async(e)=>{
     e.preventDefault()
     //console.log("Ihi")
     const Login={
       username:this.state.email || ' ',
       password: this.state.password || ''
      }
   
    console.log("Login", Login);
       axios.post('http://testapi.halanx.com/rest-auth/login/', {...Login}) 
    
     .then(res => {
        console.log(res);
        console.log(res.data); 
        axios.defaults.headers.common['Authorization'] =res.data.key;
        cookies.set('loggedIn', res.data.key, {path:'/'})
        this.props.history.push('Dashboard')
      })
      
      .catch(error =>  {
         console.log(error)
      })
     
  }

  	
    render(){
      const{classes}=this.props
	   return(
	   	<div className="Container">
          <form className="item-container" onSubmit={this.handleSubmit}>
            <TextField
             className={classes.input}
             id="standard-name"
              label="Email"
               type="text"
               name="email"
               autoComplete="email"
               margin="normal"
               value={this.state.email}
               onChange={(event)=>this.setState({email:event.target.value})}
             />
             
            <br/>
            <TextField
              className={classes.input}
              id="standard-password"   
              label="password"
              type="password"
              name="password"
              autoComplete="password"
               margin="normal"
               value={this.state.password}
               onChange={(event)=>this.setState({password:event.target.value})}
             /><br/>
            <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmit} className={classes.input}>
               Login
            </Button>
          </form>
          {
          	(cookies.get('loggedIn')!==null && cookies.get('loggedIn')!== undefined && cookies.get('loggedIn')!== "" ?
               <Redirect to="/Dashboard"/> : null
          	 )
  	
  		}

          
          </div>
		 )
    
    }
}
export default withStyles(STYLES)(Login)