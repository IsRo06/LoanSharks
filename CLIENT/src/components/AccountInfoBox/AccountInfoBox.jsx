import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from './AccountInfoBox.module.css'
import { firstNameContext, userContext, usernameContext, lastNameContext, locationContext, passwordContext } from '../../App';
import Dropdown from '../Dropdowns/Dropdowns';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql, useQuery } from '@apollo/client';
const bcrypt = require("bcryptjs");

const UPDATE_USER = gql`
  mutation UpdateInfo($input: UpdateInput!) {
  UpdateInfo(input: $input) {
    id
    firstName
    lastName
  }
}
`;

const REGISTER = gql`
  mutation register($registerInput: RegisterInput) {
  register(registerInput: $registerInput){
    id
    firstName
    lastName
  }}
`

const FETCH_USERS_QUERY= gql`
query {
  getUsers {
    id
    firstName
    lastName
    email
    password
    createdAt
    type
    location
  }
  }
`

export default function AccountInfoBox(props){
  const {errors, loading, data} = useQuery(FETCH_USERS_QUERY);
  const [firstName, setfirstName] =  useContext(firstNameContext);
  const [lastName, setlastName]=useContext(lastNameContext);;
  const[email, setEmail] = useContext(usernameContext);
  const [oldemail, setOldemail] = useContext(usernameContext);
  const [userType, setUserType] = useContext(userContext);
  const [location, setLocation] = useContext(locationContext);
  const [password, setPassword]= useContext(passwordContext);
  const [confirmPassword, setConfirmPassword] = useContext(passwordContext);

  const [sendtodatabase] = useMutation(UPDATE_USER);
  const [register] =useMutation(REGISTER);

  async function updateUser(){
    sendtodatabase({variables: {input: {oldemail,firstName,lastName,email,password,location},},});
  }
  async function registerUser(){
    register({variables: {registerInput: {firstName, lastName, email, password, confirmPassword },},});
  }

  const [userInfo, setUserInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(userType !== "None");
  const [btnWhenSignedIn, setbtnWhenSignedIn] = useState("Edit Information");
  const [newAccountType, setNewAccountType] = useState("Client");
  const locations = [ 'Gainesville', 'Orlando', 'Miami', 'Tallahassee', 'Tampa'];

  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(props.information);
  }, [props.information]);

  useEffect(() => {
    setinputsDisabled(userType !== "None");
  }, [userType])

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

  async function handleNewInfo(event, index) {
    const updatedInfo = [...userInfo];
    updatedInfo[index] = event.target.value;
    if(index === 0){
      setfirstName(updatedInfo[0]);
    }else if(index ===1){
      setlastName(updatedInfo[1]);
    }else if(index===2){
      setEmail(updatedInfo[2]);
    }else if(index === 3){
      setPassword(updatedInfo[3]);
      setConfirmPassword(updatedInfo[3]);
    }
    setUserInfo(u => u =updatedInfo);
  }

  function handleLocationChange(newLocation) {
    const updatedInfo = [...userInfo];
    updatedInfo[2] = newLocation;
    setLocation(newLocation);
    setUserInfo(u => u =updatedInfo);
  }

   async function editMode() {
    
    if (btnWhenSignedIn === "Save Changes"){ 
      window.alert("Changes have been saved");
      updateUser();
    }
    btnWhenSignedIn === "Edit Information" ? setbtnWhenSignedIn(b => "Save Changes") : setbtnWhenSignedIn(b => "Edit Information");
    setinputsDisabled(i => i = !i);
  }

  function createNewUser() {
    let desiredUser = null;
    for (const user of data.getUsers) {
      if (user.email === email) {  
        desiredUser = user;     
      }
    }
    if(!desiredUser){
      window.alert(`New ${newAccountType} has been created`);
      registerUser();
      setUserType(u => u = newAccountType);
      navigate('/');
    }else{
      window.alert("Email already in use");
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

        <div id={styles.bottom}>
          <div id={styles.radioBtns}>
            {(userType === "Admin" && props.use==="Create New") ? 
            <>
              <div className={styles.btnandLabel}>
                <input type="radio" value="Employee" checked={newAccountType === "Employee"} onChange={(event) => setNewAccountType(a => a = event.target.value)}/>
                <p>This is an Employee Account</p>
              </div>
              <div className={styles.btnandLabel}>
                <input type="radio" value="Admin" checked={newAccountType === "Admin"} onChange={(event) => setNewAccountType(a => a = event.target.value)}/>
                  <p>This is an Admin Account</p>
              </div>
              
            </>
            : "" }
          </div>
          {userType === "None" || (userType === "Admin" && props.use==="Create New") ? <button id={styles.bottomBtn} onClick={createNewUser}>Create Account</button>
          :<button id={styles.bottomBtn} onClick={editMode}>{btnWhenSignedIn}</button> }
        </div>

        

      </div>
    </div>
  );
}
