import React, {useState, useContext} from 'react'
import { userContext, locationContext } from '../../App';
import penguinImage from '../../images/penguins.jpg'
import styles from './Card.module.css'
import PropTypes from 'prop-types'
import SigninPopup from '../SigninPopup/SigninPopup';
import CheckoutPopup from '../CheckoutPopup/CheckoutPopup';

export default function Card(props){  
  const [userType, setUserType] = useContext(userContext);
  const [location, setLocation] = useContext(locationContext);

  const [signinTriggered, setsigninTriggered] = useState(false);
  const [reservationTriggered, setreservationTriggered] = useState(false);
  const [selectedCar, setselectedCar] = useState([]);


  function handleReservation(){
    setselectedCar(c => c = props.carObject);
    if (userType === "None") {
      setsigninTriggered(true);
    }
    setreservationTriggered(true);
  }

  return( 
    <>
      <div className={styles.card}>
        <img className={styles.cardImage} src={penguinImage} alt="profile picture" />
        <div id={styles.textWrapper}>
          <div id={styles.title}>
            <div id={styles.topRow}>
              <p>{props.carObject.type}</p>
              <p>${props.carObject.carCostPerDay}</p>
            </div>
            <div id={styles.bottomRow}>
              <p>{props.carObject.make} {props.carObject.model} {props.carObject.year}</p>
              <p>${props.carObject.carMileCostAfterMax} per mile after max</p>
            </div>
          </div>
        

          <div id={styles.intermediateInfo}>
            <div id={styles.leftCol}>
              <p className={styles.cardInfo}>Number of Seats: {props.carObject.seats}</p>
              <p className={styles.cardInfo}>Color: {props.carObject.color}</p>
              <p className={styles.cardInfo}>Mileage: {props.carObject.mileage}</p>
              <p className={styles.cardInfo}>Max Miles per Day: {props.carObject.maxMilesPerDay}</p>
            </div>

            <div id={styles.middleCol}>
              <p className={styles.cardInfo}>Free Cancellation</p>
              <p className={styles.cardInfo}>Pay at pick-up</p>
              <p className={styles.cardInfo}>Reserve without a credit card</p>
              <br />
            </div>

            <button id={styles.reserveBtn} onClick={handleReservation}>Reserve</button>
          </div>
          
        </div>
      </div>
      <SigninPopup trigger={signinTriggered} setTrigger={setsigninTriggered} typeOfUser={setUserType} location={setLocation}></SigninPopup>
      <CheckoutPopup trigger={reservationTriggered} setTrigger={setreservationTriggered} car={selectedCar}/>
    </>
    
  );
}

Card.propTypes = {
  name: PropTypes.string,
  seats: PropTypes.string,
  isTired: PropTypes.bool
}

Card.defaultProps = {
  name: "Weinermobile",
  seats: "5",
  isTired: false
}

