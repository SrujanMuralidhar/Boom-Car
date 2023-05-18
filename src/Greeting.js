import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Greeting extends Component{
    render(){
        return (
        <div>
            <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">BoomCars</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                </li>
                <li class="nav-item">
                    <Link to = "/terms">
                    <a class="nav-link" >Terms and Conditions</a>
                    </Link>
                  
                </li>
                <li class="nav-item">
                    <Link to = "/login">
                    <a class="nav-link" >Login</a>
                    </Link>
                  
                </li>
                <li class="nav-item">
                    <Link to = "/offers">
                    <a class="nav-link" >Offers</a>
                    </Link>
                </li>
               
              </ul>
            </div>
          </nav>
    </div>
    <div id="section_greeting_page">
    <div class="greeting_bg_image d-flex flex-column justify-content-end">
        <div class="greeting_card align_center padding_space">
            <h1 class="greeting_heading margin_top">Let's Drive </h1>
            <p class="greeting_para">People don't take trips, trips take People.</p>
            <Link to = "/login">
                <button class="btn btn-dark">Start</button>
            </Link>
            


        </div>
        
            </div>
        </div>
    </div>

        )
    }
}
export default Greeting