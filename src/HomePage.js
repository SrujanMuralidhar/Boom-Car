import React from "react";
import { Component } from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';




 function HomePage(){
    const navigate = useNavigate()

    const navigateToWagonR = ()=>{
        navigate("/wagonR")
    }
    
    const navigateToInnova = ()=>{
        navigate("/innova")
    }
    const navigateToThar = ()=>{
        navigate("/thar")
    }
    const navigateToAmaze = ()=>{
        navigate("/amaze")
    }
        
    return (
        
        <div id="section1">
            
          
                
            <div class="mainbg">
            <h1 class="mainheading ">Boom Car Rental</h1>
                    
                    <div class="padding_space1" >
                        
                        <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToWagonR} >
                            
                            <div class = "font">
                                <h1 >Maruti Suzuki Wagon R</h1>
                                <p>Older cars tend to drive like older cars. That is not for me. </p>
                            
                                <p>₹ 1200/day</p>
                            </div>
                        
                            <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1" class="all_image"/>
                    
                        </div>
                       
                    </div>
                
                
            
                <div class="padding_space1">
                    <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToInnova}>
                        <div class = "font">
                            <h1 >Toyota Innova</h1>
                            <p>A car for every purse and purpose.</p>
                        
                            <p>₹ 2500/day</p>
                        </div>
                            <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg" class="all_image"/>
                        
                    </div>
                
                </div>
            
                <div class="padding_space1">
                    <div class="car_details d-flex flex-row justify-content-between" onClick={navigateToThar}>
                    
                        <div class = "font">
                            <h1 >Mahindra Thar</h1>
                            <p>Cars we drive say alot about us.</p>
                        
                            <p>₹ 2000/day</p>
                        </div>
                    
                        <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/54437/2021-wrangler-exterior-right-front-three-quarter.jpeg?q=75&wm=1" class="all_image"/>
                
                    </div>
                </div>
            
                <div class="padding_space1">
                    <div class="car_details  d-flex flex-row justify-content-between" onClick={navigateToAmaze}>
                   
                        <div class = "font">
                            <h1 >Honda Amaze</h1>
                            <p>I couldn't find the car of my dreams, so I built it myself.</p>
                        
                            <p>₹ 1800/day</p>
                        </div>
                    
                        <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/45951/amaze-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1" class="all_image"/>
                
                    </div>
                </div>
                <div class="align1 margin_bottom_space2 padding_space1">
                <Link to= "/">
                    <button class="btn btn-primary space_between_button">Back</button>
                       
                    </Link>
                    
                   
                    <Link to= "/nextpage">
                        <button class="btn btn-success">Next</button>
                    </Link>
                  
                    
                </div>
            
            </div>
            
           
        </div>
            

    )
    }


export default HomePage;

