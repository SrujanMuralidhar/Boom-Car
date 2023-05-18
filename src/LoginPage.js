import React from 'react'
import { useState } from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';


function Login (){

        const [usernameLog,setUsernameLog] = useState("")
        const [passwordLog,setPasswordLog] = useState("")
        const navigate = useNavigate()
        if (usernameLog == "" && passwordLog == ""){
                    navigate("/login")
        }
        
        const login = ()=>{
            Axios.post("http://localhost:3001/login",{username:usernameLog,password:passwordLog}).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    navigate("/home")
                }
                else{
                    navigate("/login")
                }
            })
        }
    
    return (
        <div class = "mainbg">
            <div class="mainbg0 d-flex flex-row justify-content-center">
                <div class="login_card">
                    <div class="align1 space1">
                        <h1 class="heading1">Login </h1>
                    </div>
                    <div id = "user_pas">
                        <label class = "space_between_text_user">Username </label>
                        <input type="email" required onChange={(e)=>{setUsernameLog(e.target.value)}}></input>
                        <br/>
                        <label class = "space_between_text_pas"> Password </label>
                        <input type="password" allign = "center" required onChange={(e)=>{setPasswordLog(e.target.value)}}></input>
                    </div>
                    <div class="align1 space1">
                        <button  class="btn btn-light space_between_button" onClick={login}>Submit</button>
                        <br></br><br></br>
                        <Link to = '/registration'>
                        <label>New User ? Click here to Register</label>
                        </Link><br></br>
                        <label class = "error_message">Username or Password is invalid if the page doesn't redirect</label>

                       
                    </div>
                </div>
            </div>
        </div> 
    )
    
}

export default Login;