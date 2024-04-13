import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from './AccountInfoBox.module.css'
import { userContext } from '../../App';

export default function AccountInfoBox(props){
  const [userType, setUserType] = useContext(userContext);

  const [userInfo, setUserInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(userType !== "None");
  const [btnWhenSignedIn, setbtnWhenSignedIn] = useState("Edit Information");

  useEffect(() => {
    setUserInfo(props.information)
  }, [props.information]);

  useEffect(() => {
    setinputsDisabled(userType !== "None")
  }, [userType]);

  function handleNewInfo(event, index) {
    const updatedInfo = [...userInfo];
    updatedInfo[index] = event.target.value;
    setUserInfo(updatedInfo);
  }

  function editMode() {
    btnWhenSignedIn === "Edit Information" ? setbtnWhenSignedIn(b => "Save Changes") : setbtnWhenSignedIn(b => "Edit Information");
    setinputsDisabled(i => i = !i);
  }

  return (
    <div id={styles.accountInfoBox}>
      <div id={styles.content}>
        <h4>Account Information</h4>
        <p id={styles.instructions}>Please fill out the boxes below</p>

        {props.infoCategories.map((category, index) => (
          <div key={category} className={styles.informationContainer}>
            <p>{category}:</p>
            <input type="text" required="true" disabled={userType === "Employee" && category === "Place of Employment"? true: inputsDisabled} 
              placeholder={category} value={userInfo[index]} onChange={(event) => handleNewInfo(event, index)}/> 
          </div>
        ))}

        {userType === "None"? <button id={styles.bottomBtn}>Create Account</button>
        :<button id={styles.bottomBtn} onClick={editMode}>{btnWhenSignedIn}</button> }
      </div>
    </div>
  );
}