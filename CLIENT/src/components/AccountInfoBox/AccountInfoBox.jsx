import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from './AccountInfoBox.module.css'
import { userContext } from '../../App';
import Dropdown from '../Dropdowns/Dropdowns';

export default function AccountInfoBox(props){
  const [userType, setUserType] = useContext(userContext);

  const [userInfo, setUserInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(userType !== "None");
  const [btnWhenSignedIn, setbtnWhenSignedIn] = useState("Edit Information");
  const locations = [ 'Gainesville', 'Orlando', 'Miami', 'Tallahassee', 'Tampa'];

  useEffect(() => {
    setUserInfo(props.information);
  }, [props.information]);

  useEffect(() => {
    setinputsDisabled(userType !== "None");
  }, [userType]);

  function determineIsDisabled(category) {
    if (userType === "Employee" && category === "Place of Employment"){
      return true;
    }
    else if (props.disabledFields.includes(category)) {
      return true;
    }
    else if (userType === "Admin" && props.use==="Create New") {
      return false;
    }

    return inputsDisabled;
  }

  function handleNewInfo(event, index) {
    const updatedInfo = [...userInfo];
    updatedInfo[index] = event.target.value;
    setUserInfo(u => u = updatedInfo);
  }

  function handleLocationChange(newLocation) {
    const updatedInfo = [...userInfo];
    updatedInfo[2] = newLocation;
    setUserInfo(u => u = updatedInfo);
  }

  function editMode() {
    if (btnWhenSignedIn === "Save Changes") {
      if ((userType === "Admin" || userType === "Employee") && userInfo[4] !== userInfo[5]) {
        window.alert("Password not verified");
        return null;
      }
      else if (userType === "Client" && userInfo[3] !== userInfo[4]){
        window.alert("Password not verified");
        return null;
      }
    }

    btnWhenSignedIn === "Edit Information" ? setbtnWhenSignedIn(b => "Save Changes") : setbtnWhenSignedIn(b => "Edit Information");
    setinputsDisabled(i => i = !i);
  }

  function createNewUser() {
    if (userInfo[3] !== userInfo[4]) {
      window.alert("Password not verified");
    }
    else {
      console.log("success")
    }
  }

  return (
    <div id={styles.accountInfoBox}>
      <div id={styles.content}>
        <h4>Account Information</h4>
        <p id={styles.instructions}>Please fill out the boxes below</p>

        {props.infoCategories.map((category, index) => (
          <div key={category} className={styles.informationContainer}>
            <p>{category}:</p>
            {category !== "Place of Employment" ? 
              <input type="text" required={true} disabled={determineIsDisabled(category)}
              placeholder={category} value={userInfo[index]} onChange={(event) => handleNewInfo(event, index)}/> 
              : <div id={styles.dropDown}>
                  <Dropdown type="Location" name={userType === "None"? "Place of Employment" : userInfo[index]} options={locations} arrow="↓" locationPicked={handleLocationChange} disabled={determineIsDisabled(category)}/>
                </div>
          
            }
          </div>
        ))}

        {userType === "None" || (userType === "Admin" && props.use==="Create New") ? <button id={styles.bottomBtn} onClick={createNewUser}>Create Account</button>
        :<button id={styles.bottomBtn} onClick={editMode}>{btnWhenSignedIn}</button> }

        {(userType === "Admin" && props.use==="Create New") ? 
        <>
          <input type="radio" id="adminBtn" name="Type of Account" value="Admin"/> 
          <label htmlFor="adminBtn">Admin Account</label>
          <input type="radio" id="employeeBtn" name="Type of Account" value="Employee"/>    
          <label htmlFor="employeeBtn">Employee Account</label>
        </>
        : "" }
      </div>
    </div>
  );
}