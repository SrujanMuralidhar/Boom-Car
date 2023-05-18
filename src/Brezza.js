import React, { Component } from "react";
import { Link } from "react-router-dom";

class Brezza extends Component{
  constructor(){
    super()
    this.state = {
      price : 2000
    }
  }
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Maruti Suzuki Brezza</h1>
            <div class="card_car_details">
            <div class="align_center">
                
                        
                        <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75" class="d-block w-100 car_height_carousel" alt="..."></img>
                        <img src="https://images.livemint.com/img/2020/08/04/1600x900/EekgD2NU8AAFiXS_1596538771049_1596538780316.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>
                    
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
                        <td>Automatic/Manual</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Fuel Tank Capacity:</th>
                        <td>48ltr</td>
                     
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
export default Brezza