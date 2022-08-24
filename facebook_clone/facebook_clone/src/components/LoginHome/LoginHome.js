import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

import axios from "axios"

import {firebase} from "../../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";


export default class LoginHome extends Component {
    constructor(props){
        super(props);
        this.state={
            signIN:true,

            signin_email:null,
            signin_password:null,

            //sign up
            signup_name:null,
            signup_email:null,
            signup_password:null

        }
    }
    switchpanel=()=>{
        if(this.state.signIN)
        this.setState({signIN:false});
        else
        this.setState({signIN:true});

    }

    signUP=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.signup_email, this.state.signup_password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const User={
                "userId":user.uid+"",
                "userName":this.state.signup_name,
                "userImage":"DUMMY",
              }
            axios.post(`http://localhost:9092/api/UserService/save`, User)
        .then(res => {
        //   console.log(res);
        //   console.log(res.data);
       // localStorage.set();
          
          localStorage.setItem("user",JSON.stringify(res.data));

          window.location.reload();
        //alert(`name is :${User.userName} ${user.email}`)
        })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    signInMethod=()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.signin_email, this.state.signin_password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;


          axios.get(`http://localhost:9092/api/getuserr/`+user.uid)
          .then(res => {
          //   console.log(res);
          //   console.log(res.data);
         // localStorage.set();
            
            localStorage.setItem("user",JSON.stringify(res.data));
            window.location.reload();
          //alert(`name is :${User.userName} ${user.email}`)
          })
              // ...
            })
            .catch((error) => {
              
              // ..
            });

         
          
        //   axios.post("http://localhost:8080/create", student){
        //     alert(`name is :${firstname} ${lastname}`)

        //   }
        
          
        
         
          // ...
    }
  render() {
    const islogged=this.state.signIN;
    return (
      <div className='main_container'>

        <Grid>
            <Grid item xs={7}>
                <div className='fblogo'>
                    <img src='' width="300px"/>
                </div>
                <div>
                    <h1 className='text'>facebook helps you connect people</h1>
                </div>
            </Grid>

            <Grid item xs={3}>
               <Paper className='logincard_container'>
                
                {islogged
                ?
                    <div container="login_panel">
                    <div>
                        <input onChange={(event)=>{this.state.signin_email=event.currentTarget.value}} type="text" className='login_input' placeholder='Email address'/>
                    </div>
                    <div>
                        <input onChange={(event)=>{this.state.signin_password=event.currentTarget.value}} type="password" className='login_input' placeholder='Password'/>
                    </div>
                    <div>
                        <button onClick={this.signInMethod} className='login_button' >Log in</button>
                    </div>
                    <div>
                        <div className="forget_text">Forgot password</div>
                    </div>
                    <div>
                        <div className="dividor"></div>
                    </div>
                    <div>
                        <button className='login_createnew' onClick={this.switchpanel} >Create New Account</button>
                    </div>
                </div>
                :
                
                    <div container="login_panel">
                    <div>
                            <input onChange={(event)=>{this.state.signup_name=event.currentTarget.value}} type="text" className='login_input' placeholder='Name'/>
                        </div>
                        <div>
                            <input onChange={(event)=>{this.state.signup_email=event.currentTarget.value}} type="text" className='login_input' placeholder='Email address'/>
                        </div>
                        <div>
                            <input onChange={(event)=>{this.state.signup_password=event.currentTarget.value}} type="password" className='login_input' placeholder='Password'/>
                        </div>
                        <div>
                            <button onClick={this.signUP} className='login_button'>Sign up</button>
                        </div>
                        <div>
                            <button className='login_createnew' onClick={this.switchpanel} >Already Have Account</button>
                        </div>
                        
    
                    </div>

                }
               </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
      </div>
    )
  }
}

