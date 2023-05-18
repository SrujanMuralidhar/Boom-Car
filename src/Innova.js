import React, { Component } from "react";
import { Link } from "react-router-dom";

class Innova extends Component{
  constructor(){
    super()
    this.state = {
      price : 2500
    }
  }
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Toyota Innova</h1>
            <div class="card_car_details">
            <div class="align_center">
               
                <img src="https://imgd.aeplcdn.com/664x374/n/nd7mjta_1496295.jpg?q=75" class="d-block w-100 car_height_carousel" alt="..."></img>
                <img src="https://img.indianautosblog.com/2019/04/08/2019-toyota-innova-crysta-ivory-interior-6d4e.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
                     
                <table class="table car_text_details">
                    <thead>
                      <tr>
                        <th scope="col">Engine:</th>
                        <td scope="col">Engine Displacement(cc): 2.4L</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Fuel Type: </th>
                        <td>Petrol/Diesel</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Seating Capacity:</th>
                        <td>7</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Transmission Type:</th>
                        <td>Automatic/Manual</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Fuel Tank Capacity:</th>
                        <td>57ltr</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">ARAI Mileage:</th>
                        <td>16.24 kmpl</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Body Type:</th>
                        <td>Dispersed</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Cost:</th>
                        <td>₹ {this.state.price}/day</td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <div class="align_center padding_space">
                    <Link to = "/home">
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
export default Innova