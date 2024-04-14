import React from "react";
import "./style.css";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="div">
        <div className="overlap">
          <img className="ocean-image" alt="Ocean image" src="ocean-image.png" />
          <img className="search-box" alt="Search box" src="search-box.png" />
        </div>
        <div className="available-vehicles">
          <div className="available-vehicles-2">
            <img className="rectangle" alt="Rectangle" src="rectangle-8.png" />
            <img className="img" alt="Rectangle" src="rectangle-9.png" />
            <img className="rectangle-2" alt="Rectangle" src="rectangle-10.png" />
            <img className="rectangle-3" alt="Rectangle" src="rectangle-11.png" />
            <img className="rectangle-4" alt="Rectangle" src="rectangle-12.png" />
            <img className="rectangle-5" alt="Rectangle" src="rectangle-13.png" />
          </div>
          <div className="text-wrapper">Available Vehicles</div>
        </div>
        <div className="top-bar">
          <div className="navbar">
            <div className="text-wrapper-2">Locations</div>
            <div className="text-wrapper-3">Offers</div>
            <div className="text-wrapper-4">Help</div>
            <div className="text-wrapper-5">Sign in</div>
            <div className="logo">
              <div className="mdi-shark-fin">
                <img className="vector" alt="Vector" src="vector.svg" />
              </div>
              <div className="text-wrapper-6">Loan Sharks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
