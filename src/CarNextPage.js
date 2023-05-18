import React from "react";
import { Component } from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';

function CarNextPage (){
    const navigate = useNavigate()

    const navigateToKia = ()=>{
        navigate("/kia")
    }
    const navigateToAlturas = ()=>{
        navigate("/alturas")
    }
    const navigateToBrezza = ()=>{
        navigate("/brezza")
    }
    const navigateToCity = ()=>{
        navigate("/city")
    }
    
   
    return (
        <div id="section2">
            <div class="mainbg">
                <h1 class="mainheading">Let's Drive...</h1>
                <div class="padding_space1">
                    <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToKia}>
                  
                        <div class = "font">
                            <h1>Kia K5 Fastback</h1>
                            <p>We aren't addicted to oil, but our cars are.</p>
                            <p>₹ 2200/day</p>
                        </div>
                        <img src="https://th.bing.com/th/id/OIP.0on4Wypz56AaEoZGAIa5-QHaE6?pid=ImgDet&rs=1" class="all_image"/>
                    </div>
                </div>
            <div class="padding_space1">
                <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToAlturas}>
                    <div class = "font">
                        <h1>Mahindra Alturas G4</h1>
                        <p>I love everything from old-school cars to whatever the latest muscle or luxury vehicles are.</p>
                        <p>₹ 3500/day</p>
                    </div>
                        <img src="https://i0.wp.com/fairwheels.com/wp-content/uploads/2018/02/Mahindra-XUV-700-full-view-2018-indian-launch.jpg?resize=800%2C500&ssl=1" class="all_image"/>
                    
                </div>
            
            </div>
        
            <div class="padding_space1">
                <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToBrezza}>
                
                    <div class = "font">
                        <h1>Maruti Suzuki Breeza</h1>
                        <p>The way I drive, the way I handle a car, is an expression of my inner feelings. </p>
                    
                        <p>₹ 2000/day</p>
                    </div>
                
                    <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1" class="all_image"/>
            
                </div>
            </div>
        
            <div class="padding_space1">
                <div class="car_details  d-flex flex-row justify-content-between" onClick={navigateToCity}>
               
                    <div class = "font">
                        <h1 >Honda City</h1>
                        <p>I wish people would spend their money on hybrid cars. </p>
                    
                        <p>₹ 2500/day</p>
                    </div>
                
                    <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/40535/all-new-city-exterior-right-front-three-quarter.jpeg?q=75&wm=1" class="all_image"/>
            
                </div>
            </div>
            <div class="align1 margin_bottom_space2 padding_space1">
                <Link to = "/home">
                    <button class="btn btn-primary space_between_button" >Back</button>

                </Link>
                
            </div>
        </div>
        
        </div>
    )
}



export default CarNextPage;
