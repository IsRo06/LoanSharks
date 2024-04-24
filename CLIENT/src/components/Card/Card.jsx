import React, {useState, useContext, useEffect, useRef} from 'react'
import { userContext, locationContext, usernameContext, firstNameContext, lastNameContext, passwordContext } from "../../App";
import styles from './Card.module.css'
import SigninPopup from '../SigninPopup/SigninPopup';
import CheckoutPopup from '../CheckoutPopup/CheckoutPopup';


export default function Card(props){  
  const [firstName, setfirstName] =  useContext(firstNameContext);
  const [lastName, setlastName]= useContext(lastNameContext);;
  const [username, setUsername] = useContext(usernameContext);
  const [password, setPassword] = useContext(passwordContext);

  const [userType, setUserType] = useContext(userContext);
  const userTypeRef = useRef(userType)
  const [location, setLocation] = useContext(locationContext);

  function sendData({desiredUser}) {
    setfirstName(desiredUser.firstName);
    setlastName(desiredUser.lastName);
    setUsername(desiredUser.email);
    setUserType(desiredUser.type);
    setLocation(desiredUser.location);
    setPassword(desiredUser.password);
    
  }

  const [signinTriggered, setsigninTriggered] = useState(false);
  const [reservationTriggered, setreservationTriggered] = useState(false);
  const [selectedCar, setselectedCar] = useState([]);

  useEffect(() => {
    userTypeRef.current = userType
  }, [userType]);

  async function handleReservation(){
    setselectedCar(c => c = props.carObject);
    if (userType === "None") {
      setsigninTriggered(true);
    }
    await waitForSignIn();
    setTimeout(() => {    
      setreservationTriggered(true);
    }, 500);
  }

  function waitForSignIn() {
    return new Promise((resolve) => {
      function check() {
        if (userTypeRef.current !== "None") {
          resolve();
        }
        else {
          setTimeout(check, 100)
        }
      };
      check();
    });
  };

  return( 
    <>
      <div className={styles.card}>
        <img className={styles.cardImage} src={props.carObject.carIMGstring} alt="profile picture" />
        <div id={styles.textWrapper}>
          <div id={styles.title}>
            <div id={styles.topRow}>
              <p>{props.carObject.type}</p>
              <p>${props.carObject.carCostPerDay} per day</p>
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
      <SigninPopup trigger={signinTriggered} setTrigger={setsigninTriggered} typeOfUser={setUserType} location={setLocation} sendData={sendData}></SigninPopup>
      <CheckoutPopup trigger={reservationTriggered} setTrigger={setreservationTriggered} car={selectedCar}/>
    </>
    
  );
}