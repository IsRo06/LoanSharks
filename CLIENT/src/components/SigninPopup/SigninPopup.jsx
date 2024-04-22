import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import styles from './SigninPopup.module.css'
import { gql, useQuery } from '@apollo/client';

const FETCH_USERS_QUERY= gql`
query {
  getUsers {
    id
    firstName
    lastName
    email
    password
    type
    location
  }
  }
`
export default function SigninPopup(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading, error, data} = useQuery(FETCH_USERS_QUERY);
 

  function emailFill(event){
    setEmail(event.target.value)
  }

  function passwordFill(event){
    setPassword(event.target.value)
  }
  function createNew() {
    props.typeOfUser("None");
    props.setTrigger(false);
  }

  
  let desiredUser = null;

  function signin(event){
    const desiredEmail = email; 
    for (const user of data.getUsers) {
      if (user.email === email) {
        desiredUser = user;
        break; 
      }
    }
  
    if (!desiredUser) return <p>No user found with email {desiredEmail}</p>;
    
    props.sendData({desiredUser});
    props.typeOfUser(desiredUser.type);
    props.location(desiredUser.location);
    props.setTrigger(false);
  }
  
  if (loading) return null;
  if (error) return `${error}`;

  return(props.trigger) ? (
    <div id={styles.background}>
      <div id={styles.popup}>

        <div id={styles.topContainer}>
          <h4 id={styles.signInLabel}>Sign In</h4>
          <button id={styles.closeBtn} onClick={() => props.setTrigger(false)}>
            {props.children} X
          </button>
        </div>

        <div id={styles.inputContainer}>
          <div className={styles.labelAndBox}>
            <p>Email:</p>
            <input type="text" className={styles.inputBox} value={email} onChange={emailFill} placeholder="Email"/>
          </div>
          <div className={styles.labelAndBox}>
            <p>Password:</p>
            <input type="text" className={styles.inputBox} value={password} onChange={passwordFill} placeholder="Password"/>
          </div>
          <button id={styles.submitBtn} onClick={signin}>Submit</button>
        </div>

        <p id={styles.noAccount}>Don't have an account? <Link to ='/account' id={styles.link} onClick={createNew}>Create One Today</Link> </p>
      </div>
    </div>
  ) : "";


}

