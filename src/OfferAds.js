import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class OfferAds extends Component{
    render(){
    return (
        <div>
    <div>
        <img src="https://www.boom-online.co.uk/wp-content/uploads/2015/09/logo-white-on-orange.png" class="boom_image"/>
    </div>
    <div class="main-bg padding_space">
       
          
            <img src="https://img.freepik.com/premium-vector/banner-design-best-car-rental-deals-template_262129-12248.jpg?w=740" class="d-block w-100 carousel_image" alt="..."></img>
                
        <div class="d-flex flex-row justify-content-center">
        <div class="dicount_card align_center margin_space discount">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-163836,resizemode-1,msid-74881367/news/politics-and-nation/investors-hit-hard-by-steep-fall-in-toll-collections.jpg" class="image_card"/>
            <div>
                <p>Toll Free</p>
            </div>

        </div>

        <div class="dicount_card align_center margin_space discount">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqsyWqXJfQU2Bq9ayer-6MvgcvHX8hQWcpli8p_M&s" class="image_card"/>
            <div>
                <p>Insurance</p>
            </div>

        </div>

        <div class="dicount_card align_center margin_space discount">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_4_ZieEdLluPUIdjNQ3RIz3XwmG6Rw45c966j67BhRArDyyhwPAP4pHxoO2AYy6A-Lc&usqp=CAU" class="image_card"/>
            <div>
                <p>Sell your car</p>
            </div>

        </div>

        
    </div>

    <div class="d-flex flex-row justify-content-center">
        <div class="dicount_card align_center margin_space discount">
            <img src="https://images.moneycontrol.com/static-mcnews/2020/12/discount-offers.jpg" class="image_card"/>
            <div>
                <p>Discounts</p>
            </div>

        </div>

        <div class="dicount_card align_center margin_space discount">
            <img src="https://www.shutterstock.com/image-vector/document-prohibition-sign-on-white-260nw-1487958500.jpg" class="image_card"/>
            <div>
                <p>No paper work</p>
            </div>

        </div>

        <div class="dicount_card align_center margin_space discount">
            <img src="https://www.shutterstock.com/image-vector/planet-earth-world-globe-oceans-260nw-710617870.jpg" class="image_card"/>
            <div>
                <p>Acces anywhere</p>
            </div>

        </div>

        

        
    </div>
    <div class="d-flex flex-row justify-content-center">
        <Link to = "/">
        <button class="btn btn-primary margin_space">Back</button>
        </Link>
        
       
    </div>


    </div>
    <div id="help_section">
    <div class="high_margin_space">
    <div class="card_help align_center high_margin_space">
        <h1 class="help_heading">Contact Us @</h1>
        <p class="help_para">Email : letsgoboomboom@gmail.com </p>
        <p class="help_para">Call Us @+91 9448457321, 9845321670 , 7865439872 </p>
        <p class="help_para">For Further Assistance and Booking Details mail us @<br/>boom.atyourservice@gmail.com</p>

    </div>
    </div>
    </div>
</div>
                )
    }
}

export default OfferAds;
