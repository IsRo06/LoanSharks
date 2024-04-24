import React from 'react'
import {useContext} from 'react'
import { locationContext, rentalRangeContext, usernameContext } from '../../App';
import styles from './CheckoutPopup.module.css'
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const UPDATE_RESERVATION = gql`
  mutation UpdateCarRegistration($registrationInput: updateCarRegistrationInput!) {
  UpdateCarRegistration(registrationInput: $registrationInput) {
    id
  }
}
`
export default function CheckoutPopup(props){
  const [updateres] = useMutation(UPDATE_RESERVATION);
  const [location, setLocation] = useContext(locationContext);
  const [rentalRange, setRentalRange] = useContext(rentalRangeContext);
  const [email, setEmail ] = useContext(usernameContext)
  const navigate = useNavigate();

  function update(){
    var car_id = props.car.id;
    var reservations = rentalRange;
    updateres({variables: {registrationInput: {car_id, email, reservations} }});
  }

  function handleConfirmedReservation() {
    props.setTrigger(false);
    update();
    window.alert("Your Reservation has been confirmed!");
    navigate('/');
  }

  return(props.trigger) ? (
    <div id={styles.background}>
      <div id={styles.popup}>
          <button id={styles.closeBtn} onClick={() => props.setTrigger(false)}>
            {props.children} X
          </button>
          <div id={styles.title}>
            <div id={styles.topRow}>
              <p>{props.car.type}</p>
              <p>${props.car.carCostPerDay} per day</p>
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
              <p className={styles.cardInfo}>Rental Range: {rentalRange[0]}/{rentalRange[1]} - {rentalRange[2]}/{rentalRange[3]}</p>
              <br />
              <button id={styles.reserveBtn} onClick={handleConfirmedReservation}>Confirm Reservation</button>
            </div>

          </div>
          
      </div>
   </div>
  ) : "";
}