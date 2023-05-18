import React, { Component } from "react";
import { Link } from "react-router-dom";

class Alturas extends Component{
  constructor(){
    super()
    this.state = {
      price : 3500
    }
  }
    render(){
        return (
            <div class="car_page_bg padding_space1">
            <h1 class="margin_left heading_details">Mahindra Alturas</h1>
            <div class="card_car_details">
            <div class="align_center">
               
                        
                        <img src="https://stimg.cardekho.com/images/car-images/930x620/Mahindra/Alturas-G4/7795/1591247725578/225_Atlantic_Blue_24324a.jpg?tr=w-420" class="d-block w-100 car_height_carousel" alt="..."></img>
                        <img src="https://automotivemahindra.com/wp-content/uploads/2019/08/Automotive-Mahindra-Alturas-G4-Interior-8.jpg" class="d-block w-100 car_height_carousel" alt="..."></img>


                <table class="table car_text_details">
                    <thead>
                      <tr>
                        <th scope="col">Engine:</th>
                        <td scope="col">Engine Displacement(cc): 2.2L</td>
                        
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
                        <td>70ltr</td>
                     
                      </tr>
                      <tr>
                        <th scope="row">ARAI Mileage:</th>
                        <td>12 kmpl</td>
                       
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
export default Alturas