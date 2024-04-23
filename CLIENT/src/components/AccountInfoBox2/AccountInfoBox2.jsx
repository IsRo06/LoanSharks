import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from './AccountInfoBox2.module.css'
import { userContext } from '../../App';
import Dropdown from '../Dropdowns/Dropdowns';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const REGISTER_BY_ADMIN = gql`
  mutation registerByAdmin($registerAdminInput: RegisterAdminInput!) {
  registerByAdmin(registerAdminInput: $registerAdminInput) {
    id
    firstName
    lastName
  }
}`
const UPDATE_EMPLOYEE_LOCATION = gql`
mutation UpdateLocation($input: updateInputLocation!) {
  UpdateLocation(input: $input) {
    firstName
    lastName
    email
    location
  }
}
`
export default function AccountInfoBox(props){
  const [pressed, setPressed] = useState(false);
  const [userType, setUserType] = useContext(userContext);
  const [userInfo, setUserInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(userType !== "None");
  const [btnWhenSignedIn, setbtnWhenSignedIn] = useState("Edit Information");
  const [type, setNewAccountType] = useState("Client");
  const locations = [ 'Gainesville', 'Orlando', 'Miami', 'Tallahassee', 'Tampa'];


  const [firstName, setfirstName] =  useState("");
  const [lastName, setlastName]=useState("");
  const[email, setEmail] = useState("");
  const [oldemail, setOldemail] = useState("");
  const [location, setLocation] = useState("Gainesville");
  const [password, setPassword]= useState("");
  const [confirmPassword, setConfirmPassword] =useState("");

  const navigate = useNavigate();
  const [registerbyadmin] = useMutation(REGISTER_BY_ADMIN);
  const [updateemployee] = useMutation(UPDATE_EMPLOYEE_LOCATION);

  async function registerUser(){
    props.reload(pressed);
    registerbyadmin({variables: {registerAdminInput: {firstName, lastName, email, password, confirmPassword, type, location },},});
  }
  async function updatelocation(){
    props.reload(pressed);
    updateemployee({variables: {input: {email, location}}});
  }

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

  function handleNewInfo(event, index) {
    const updatedInfo = [...userInfo];
    updatedInfo[index] = event.target.value;
    if(index === 0){
      setfirstName(updatedInfo[0]);
    }else if(index ===1){
      setlastName(updatedInfo[1]);
    }else if(index===2){
      setEmail(updatedInfo[2]);
    }else if(index === 3){
      setEmail(updatedInfo[3]);
    }else if(index===4){
        setPassword(updatedInfo[4]);
        setConfirmPassword(updatedInfo[4])
    }
    setUserInfo(u => u = updatedInfo);
  }

  function handleLocationChange(newLocation) {
    const updatedInfo = [...userInfo];
    updatedInfo[2] = newLocation;
    setLocation(updatedInfo[2])
    setEmail(updatedInfo[3]);
    setUserInfo(u => u = updatedInfo);
  }

  function editMode() {
    if (btnWhenSignedIn === "Save Changes"){
      setPressed(true);
      updatelocation();
      window.alert("Change have been saved");
      setPressed(false);
      navigate('/');
    }
    btnWhenSignedIn === "Edit Information" ? setbtnWhenSignedIn(b => "Save Changes") : setbtnWhenSignedIn(b => "Edit Information");
    setinputsDisabled(i => i = !i);
  }

  function createNewUser() {
    window.alert(`New ${type} has been created`);
    //Create new employee account
    setPressed(true);
    registerUser()
    setPressed(false);
    navigate('/');
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
                <input type="radio" value="Employee" checked={type === "Employee"} onChange={(event) => setNewAccountType(a => a = event.target.value)}/>
                <p>This is an Employee Account</p>
              </div>
              <div className={styles.btnandLabel}>
                <input type="radio" value="Admin" checked={type === "Admin"} onChange={(event) => setNewAccountType(a => a = event.target.value)}/>
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