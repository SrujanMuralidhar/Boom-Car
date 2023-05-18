import React, { Component } from "react";
import { Link } from "react-router-dom";



class WagonR extends Component{
  
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Maruti Suzuki WagonR</h1>
            <div class="card_car_details">
            <div class="align_center">
                
                      
              <img src="https://static.autox.com/uploads/2022/03/Maruti-Suzuki-Wagon-R-2022-Left-Front-Three-Quarter.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
              <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/34467/wagonr-interior-dashboard.jpeg" class="d-block w-100 car_height_carousel" alt="..."></img>
                      
                <table class="table car_text_details">
                    <thead>
                      <tr>
                        <th scope="col">Engine:</th>
                        <td scope="col">Engine Displacement(cc): 1197</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Fuel Type: </th>
                        <td>Petrol</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Seating Capacity:</th>
                        <td>5</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Transmission Type:</th>
                        <td>Automatic</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Fuel Tank Capacity:</th>
                        <td>32.ltr</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">ARAI Mileage:</th>
                        <td>24.43 kmpl</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Body Type:</th>
                        <td>Hatchback</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Cost:</th>
                        <td>₹ 1200/day</td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <div class="align_center padding_space">
                  <Link to = "/home">
                    <button class="btn btn-primary space_between_button">Back</button>
                    </Link>
                    <Link to = "/terms">
                      <button class="btn btn-success" >Book Now</button>
                    </Link>
                  </div>
                </div>
    
            </div>
            
        </div>
        
    
        )
    }
}
export default WagonR