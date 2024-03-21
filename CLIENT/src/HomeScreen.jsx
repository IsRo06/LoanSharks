import './HomeScreen.css';
import logo from './images/logo.png'
import oceanImage from './images/ocean.png';
import calandarIcon from './images/calandar-icon.jpg';
import clockIcon  from './images/clock-icon.jpg';
import locationIcon from './images/location-icon.jpg';
import React from 'react';

function HomeScreen() {
  return (
    <div id="homeScreen">
      <div id="topBanner">
        <div id="leftSide">
          <img id="logoImage" src={logo} alt=""/>
          <h4 id="websiteName">Loan Sharks Enterprise</h4>
        </div>
        <div id="rightSide">
          <div className="bannerText">Help</div>
          <div className="bannerText">Offers</div>
          <div className="bannerText">Locations</div>
          <div className="bannerText">Sign in</div>
        </div>
      </div>

      <img id="oceanImage" src={oceanImage} alt="" />
      
      <div id="searchBox">
        <h4>Find a Vehicle</h4>
        <div id="pickUpLocation">
          <img src={locationIcon} alt=""/>
          <div className="searchBoxText">
            <p>Pick-up</p>
            <input type="text" placeholder="Pick-up" />
          </div>
        </div>
        <div id="dateAndTime">
          <div className="dateAndTimeContainer">
            <img src={calandarIcon} alt=""/>
            <div className="searchBoxText">
              <p>Pick-up Date</p>
              <input type="text" placeholder="Pick-up Date" />
            </div>
          </div>
          <div className="dateAndTimeContainer">
            <img src={clockIcon} alt=""/>
            <div className="searchBoxText">
              <p>Pick-up Time</p>
              <input type="text" placeholder="Pick-up Time" />
            </div>
          </div>
          <div className="dateAndTimeContainer">
            <img src={calandarIcon} alt=""/>
            <div className="searchBoxText">
              <p>Drop-off Date</p>
              <input type="text" placeholder="Drop-off Date" />
            </div>
          </div>
          <div className="dateAndTimeContainer">
            <img src={clockIcon} alt=""/>
            <div className="searchBoxText">
              <p>Drop-off Time</p>
              <input type="text" placeholder="Drop-off Time" />
            </div>
          </div>
        </div>
        <button id="searchBtn">Search</button>
      </div>

      <nav className="carImages"></nav>
      <footer id="footer"></footer>
    </div>
  );
}

export default HomeScreen;