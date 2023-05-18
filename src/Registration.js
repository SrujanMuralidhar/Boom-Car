import React from 'react'
import { useState } from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';




function Register (){

        const [usernameLog,setUsernameLog] = useState("")
        const [passwordLog,setPasswordLog] = useState("")
        const [confirmPas,setConfirmPas] = useState("")
        const navigate = useNavigate()

    const login = ()=>{
        Axios.post("http://localhost:3001/registration",{username:usernameLog,password:passwordLog}).then((response)=>{
            console.log(response)
            navigate("/login")
        })

    }       
    return (
        <div class = "mainbg">
            <div class="mainbg0 d-flex flex-row justify-content-center">
                <div class="login_card">
                    <div class="align1 space1">
                        <h1 class="heading1">Register </h1>
                    </div>
                    <div id = "user_pas">
                        <label class = "space_between_button">Username </label>
                        <input type="email" required onChange={(e)=>{setUsernameLog(e.target.value)}}></input>
                        <br/>
                        <label class = "space_between_text_pas"> Password </label>
                        <input type="password" allign = "center" required onChange={(e)=>{setPasswordLog(e.target.value)}}></input>
                        <br></br>
                        <label class = "space_between_text_confpas"> Confirm Password </label>
                        <input type="password" allign = "center" required onChange={(e)=>{setConfirmPas(e.target.value)}}></input>

                    
                    </div>
                    <div class="align1 space1">
                        <button  class="btn btn-light space_between_button" onClick={()=>{
                            if(confirmPas == passwordLog){
                                login()
                            }
                        }}>Register</button>
                        <br></br><br></br>
                        <label class = "error_message">If the page doesn't redirect then the passwords do not match</label>
                       
                    </div>
                </div>
            </div>
        </div> 
    )
    
}

export default Register;