import React, { Component } from "react";
import { Link } from "react-router-dom";

class Amaze extends Component{
  constructor(){
    super()
    this.state = {
      price : 1800
    }
  }
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Honda Amaze</h1>
            <div class="card_car_details">
            <div class="align_center">
                
                <img src="https://imgd.aeplcdn.com/0x0/n/r8k4oua_1555993.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
                <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/45951/amaze-facelift-interior-dashboard-2.jpeg?isig=0" class="d-block w-100 car_height_carousel" alt="..."></img>
                     
                <table class="table car_text_details">
                    <thead>
                      <tr>
                        <th scope="col">Engine:</th>
                        <td scope="col">Engine Displacement(cc): 1.5L</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Fuel Type: </th>
                        <td>Petrol/Diesel</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Seating Capacity:</th>
                        <td>5</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Transmission Type:</th>
                        <td>Manual</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Fuel Tank Capacity:</th>
                        <td>35ltr</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">ARAI Mileage:</th>
                        <td>20 kmpl</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Body Type:</th>
                        <td>Sedan</td>
                      </tr>
                      <tr>
                        <th scope="row">Cost:</th>
                        <td>₹ {this.state.price}/day</td>
                      </tr>
                     
                    </tbody>
                  </table>
                  <div class="align_center padding_space">
                    <Link to="/home">
                    <button class="btn btn-primary space_between_button">Back</button>
                    </Link>
                    <Link to = "/terms">
                    <button class="btn btn-success">Book Now</button>

                    </Link>
                  </div>
                </div>
    
            </div>
            
        </div>
        
    
        )
    }
}
export default Amaze