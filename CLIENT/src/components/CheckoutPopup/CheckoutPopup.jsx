import React from 'react'
import {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { locationContext } from '../../App';
import styles from './CheckoutPopup.module.css'

export default function CheckoutPopup(props){
  const [location, setLocation] = useContext(locationContext);

  return(props.trigger) ? (
    <div id={styles.background}>
      <div id={styles.popup}>
          <div id={styles.title}>
            <div id={styles.topRow}>
              <p>{props.car.type}</p>
              <p>${props.car.carCostPerDay}</p>
            </div>
            <div id={styles.bottomRow}>
              <p>{props.car.make} {props.car.model} {props.car.year}</p>
              <p>${props.car.carMileCostAfterMax} per mile after max</p>
            </div>
          </div>
        

          <div id={styles.intermediateInfo}>
            <div id={styles.leftCol}>
              <p className={styles.cardInfo}>Number of Seats: {props.car.seats}</p>
              <p className={styles.cardInfo}>Color: {props.car.color}</p>
              <p className={styles.cardInfo}>Mileage: {props.car.mileage}</p>
              <p className={styles.cardInfo}>Max Miles per Day: {props.car.maxMilesPerDay}</p>
            </div>

            <div id={styles.middleCol}>
              <p className={styles.cardInfo}>Free Cancellation</p>
              <p className={styles.cardInfo}>Pay at pick-up</p>
              <p className={styles.cardInfo}>Reserve without a credit card</p>
              <br />
            </div>

            <div id={styles.rightCol}>
              <p className={styles.cardInfo}>Pickup: {location}</p>
                <p className={styles.cardInfo}>Rental Range:</p>
              <button id={styles.reserveBtn}>Confirm Reservation</button>
              <br />
            </div>

          </div>
          
      </div>
   </div>
  ) : "";
}

// {rentalDate[0]}/{rentalDate[1]} - {rentalDate[2]}/{rentalDate[3]}