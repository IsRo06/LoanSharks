import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import styles from "./Reservations.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SigninPopup from "../components/SigninPopup/SigninPopup";

import { userContext, locationContext } from "../App";

export default function Reservations(){
  const [userType, setUserType] = useContext(userContext);
  const userTypeRef = useRef(userType)
  const [location, setLocation] = useContext(locationContext);
  const [signinTriggered, setsigninTriggered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userTypeRef.current = userType
  }, [userType]);

  async function handleNewReservation(){
    setsigninTriggered(true);
    await waitforNewAccount();
    setTimeout(() => {    
      navigate('/');
    }, 500);
  }

  function waitforNewAccount() {
    return new Promise((resolve) => {
      function check() {
        if (userTypeRef.current === "Client") {
          resolve();
        }
        else {
          setTimeout(check, 100)
        }
      };
      check();
    });
  };

  function getReservations(){
    return [
      {
        year: 2016,
        make: "Toyota",
        model: "Corolla", 
        email: "bobsmith@gmail.com",
        range: [1, 31, 2, 15]
      },
      {
        year: 2012,
        make: "Honda",
        model: "Civic", 
        email: "andrewlawson@gmail.com",
        range: [2, 2, 2, 4]
      },
      {
        year: 2020,
        make: "Ford",
        model: "F150", 
        email: "jessiegraham@gmail.com",
        range: [3, 1, 3, 15]
      }
    ];
  }

  return(
    <>
      <Header/>

      <div id={styles.content}>
        <div id={styles.reservationBox}>
          <h4>Reservations</h4>
          <p id={styles.location}>{location}, FL</p>

          {getReservations().map((reservation) => (
            <div key={reservation.email} className={styles.reservations}> 
              <div className={styles.carAndDate}>
                <p>{reservation.year} {reservation.make} {reservation.model}</p>
                <p>{reservation.range[0]}/{reservation.range[1]} - {reservation.range[2]}/{reservation.range[3]}</p>
              </div>
              <p>{reservation.email}</p>
            </div>
          ))}

          <button id={styles.reservationBtn} onClick={handleNewReservation}>
            Create New
          </button>

        
        </div>
      </div>

      <Footer/>

      <SigninPopup trigger={signinTriggered} setTrigger={setsigninTriggered} typeOfUser={setUserType} location={setLocation}></SigninPopup>
    </>
  )
}