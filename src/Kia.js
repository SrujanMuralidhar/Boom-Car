import React, { Component } from "react";
import { Link } from "react-router-dom";

class Kia extends Component{
  constructor(){
    super()
    this.state = {
      price : 2200
    }
  }
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Kia K5 Fastback</h1>
            <div class="card_car_details">
            <div class="align_center">
               
                <img src="https://images.hgmsites.net/lrg/2021-kia-k5-ex-auto-fwd-angular-front-exterior-view_100776138_l.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
                <img src="https://www.kia.com/us/content/dam/kia/us/en/vehicles/k5/2023/mep/v2/kia_k5_2023_tab-bottom_stylish-controls.jpg/_jcr_content/renditions/mobile.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
                  
                <table class="table car_text_details">
                    <thead>
                      <tr>
                        <th scope="col">Engine:</th>
                        <td scope="col">Engine Displacement(cc): 1.6L</td>
                        
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
                        <td>Automatic/Manual</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Fuel Tank Capacity:</th>
                        <td>50ltr</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">ARAI Mileage:</th>
                        <td>20 kmpl</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Body Type:</th>
                        <td>Sport Utility</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Cost:</th>
                        <td>₹ {this.state.price}/day</td>
                      </tr>
                      
                    </tbody>
                  </table>
                  <div class="align_center padding_space">
                    <Link to = "/nextpage">
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
export default Kia