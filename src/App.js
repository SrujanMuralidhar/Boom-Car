import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import CarNextPage from './CarNextPage';
import Login from './LoginPage';
import OfferAds from './OfferAds';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Greeting from './Greeting';
import WagonR from './WagonR';
import Innova from './Innova';
import Thar from './Thar';
import Amaze from './Amaze';
import Alturas from './Alturas';
import Brezza from './Brezza';
import HondaCity from './Hondacity';
import Kia from './Kia';
import Terms from './TermsAndCondition';
import Register from './Registration';
import Book from './Booking';




class App extends Component  {
  render(){
    return (
      <Router>
          <div className="App">
            <Routes>
              {/* <Route exact path='/help' element={<Help />}></Route>
              <Route exact path='/about' element={< About />}></Route> */}
              <Route exact path='/terms' element={<Terms />}></Route>
              <Route exact path='/home' element={< HomePage />}></Route>
              <Route exact path='/nextpage' element={< CarNextPage />}></Route>
              <Route exact path='/login' element={< Login />}></Route>
              <Route exact path='/offers' element={< OfferAds />}></Route>
              <Route exact path='/' element={< Greeting/>}></Route>
              <Route exact path='/wagonR' element={<WagonR />}></Route>
              <Route exact path='/innova' element={<Innova />}></Route>
              <Route exact path='/thar' element={<Thar />}></Route>
              <Route exact path='/amaze' element={<Amaze />}></Route>
              <Route exact path='/alturas' element={<Alturas />}></Route>
              <Route exact path='/brezza' element={<Brezza />}></Route>
              <Route exact path='/city' element={<HondaCity />}></Route>
              <Route exact path='/kia' element={<Kia />}></Route>
              <Route exact path='/registration' element={<Register/>}></Route>
              <Route exact path='/booking' element={<Book/>}></Route>

            </Routes>
            
          </div>
      </Router>
    );

  }
  
}

export default App;
