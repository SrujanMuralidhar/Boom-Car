import React from 'react'
import { useState } from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';


function Login1 (){

        const [usernameLog,setUsernameLog] = useState("")
        const [passwordLog,setPasswordLog] = useState("")
        const navigate = useNavigate()

        const login = ()=>{
            Axios.post("http://localhost:3001/login",{username:usernameLog,password:passwordLog}).then((response)=>{
                console.log(response)
                if(response == "Ok"){
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
                        <label color='red'>Incorrect Username or Password</label>
                    </div>
                    <div class="align1 space1">
                        <button  class="btn btn-light space_between_button" onClick={login}>Submit</button>
                        <Link to = "/home">
                            <button padding= "5px" class="btn btn-light">Skip</button>
                        </Link><br></br><br></br>
                        <Link to = '/registration'>
                        <label>New User ? Click here to Register</label>
                        </Link>
                        

                        
                       
                    </div>
                </div>
            </div>
        </div> 
    )
    
}

export default Login1;