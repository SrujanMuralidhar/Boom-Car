import React, { Component } from "react";
import { Link } from "react-router-dom";


class Book extends Component{
    render(){
        return(
            <div>
            <div class="booking_bg d-flex flex-column justify-content-center">
            <div class="card_booking align_center margin_top">
            
                  <h5 class="card-title">Booking Confirmed!!</h5>
                  <p class="card-text">Sometimes it's more about the journey than the destination.The Journey of Thousand Miles Begins with ONE Step.</p>
                  <p class="card-text"><small class="text-muted">Thank You!!!</small></p>
                  <hr/>
                </div>
              </div>
       
            <div class="align_center d-flex flex-row justify-content-center">
                <Link to="/">
                    <button class="btn btn-primary align_center">Back</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default Book;
