import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Terms extends Component{
    render(){
        return (
            <div class="margin_space">
            <div class="margin_space">
            <h1 class="margin_space padding_space terms_and_cond">Terms and Conditions</h1>
            </div>
            <ul>
                <li>Payment and Refund should be collected within a week's time.</li>
                <li>Refund of Money is possible if the deal is canceled after one hour of booking.</li>
                <li>Should has DL and should submit your ID's via your boom's manager</li>
                <li>Company does the claim any risk of accidents or death.</li>
                <li>The driver should repay ,if any losses caused to the vehical.</li>
                <li>Should maintain a certain amount in your bank account by the end of the month if you opt EMI scheme.</li>
                <li>If failed to pay your due's your ID's may not be returned, action will be taken.</li>
                <li>Your share's invested on our company, does not give you any other facilities.Certain facilities are given if you opt the higher package plans.</li>
                <li>If any fault occur's from our side the company takes care so that your goes on smoothly.</li>
                <li>If any higher packages are bought by customer cannot be refunded.</li>
                <li>Your bank details should be provided to the company in case if you opt EMI scheme, before your trip.</li>
                <li>The number of people travelling and their details must be provided before your trip.</li>
            </ul>
            <div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" required></input>
                      </div>
                    </div>
                    
                    <br/>
                    <p>*Terms & Cond...</p>
                  </div>
            </div>
            <div class="align_center">
            <Link to = "/home">
                <button class="btn btn-primary space_between_button" >Back</button>
                </Link>
                <Link to = "/booking">
                <button class="btn btn-success" >Next</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default Terms