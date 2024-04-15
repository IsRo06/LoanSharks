import React from "react";
import { useContext } from "react";
import styles from "./Reservations.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { locationContext } from "../App";

export default function Reservations(){
  const [location, setLocation] = useContext(locationContext);

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

        
        </div>
      </div>

      <Footer/>
    </>
  )
}