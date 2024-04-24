import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import styles from "./Reservations.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SigninPopup from "../components/SigninPopup/SigninPopup";
import { gql, useQuery, useMutation } from '@apollo/client';

import { userContext, locationContext, usernameContext, firstNameContext, lastNameContext, passwordContext } from "../App";

const FETCH_CAR_QUERY= gql`
query {
  getCars {
    id
    carMake
    carModel
    carColor
    carMileage
    carYear
    carType
    carMaxMilesPerDay
    carMileCostAfterMax
    carCostPerDay
    carLocation
    carStatus
    carReservations
    carIMGstring
  }
  }
`

export default function Reservations(){
  const {loading, error, data, refetch} = useQuery(FETCH_CAR_QUERY);
  const [userType, setUserType] = useContext(userContext);
  const userTypeRef = useRef(userType)
  const [location, setLocation] = useContext(locationContext);
  const [signinTriggered, setsigninTriggered] = useState(false);


  const [firstName, setfirstName] =  useContext(firstNameContext);
  const [lastName, setlastName]=useContext(lastNameContext);;
  const[username, setUsername] = useContext(usernameContext);
  const [password, setPassword] = useContext(passwordContext);

  function sendData({desiredUser}) {
    setfirstName(desiredUser.firstName);
    setlastName(desiredUser.lastName);
    setUsername(desiredUser.email);
    setUserType(desiredUser.type);
    setLocation(desiredUser.location);
    setPassword(desiredUser.password);
<<<<<<< HEAD
=======
    
>>>>>>> 73fc2a44cf0c907f17a69bb2ceeddd63c7070647
  }

  const navigate = useNavigate();

<<<<<<< HEAD
  function fetch_cars(){
=======
  function fecth_cars(){
>>>>>>> 73fc2a44cf0c907f17a69bb2ceeddd63c7070647
    const tempCars = [];
    if(data && data.getCars){
      for (let i = 0; i < data.getCars.length; i++) {
        if(data.getCars[i].carReservations[0] !== 0 && data.getCars[i].carLocation === location){
          tempCars.push({
            year: data.getCars[i].carYear,
            make: data.getCars[i].carMake,
            model: data.getCars[i].carModel,
            email: data.getCars[i].carEmail,
            range: data.getCars[i].carReservations
          });
        }
        
      }
    }
    return tempCars;

  }

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
<<<<<<< HEAD
    return fetch_cars();
=======
    return fecth_cars();
>>>>>>> 73fc2a44cf0c907f17a69bb2ceeddd63c7070647
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
<<<<<<< HEAD
=======

>>>>>>> 73fc2a44cf0c907f17a69bb2ceeddd63c7070647
      <SigninPopup trigger={signinTriggered} setTrigger={setsigninTriggered} typeOfUser={setUserType} location={setLocation} sendData={sendData}></SigninPopup>
    </>
  )
}