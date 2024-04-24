import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './SigninPopup.module.css'
import { gql, useQuery } from '@apollo/client';
import { AuthContext } from '../../context/auth';
import { useMutation } from '@apollo/client';
const bcrypt = require("bcryptjs");


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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
    }
  }
`;

export default function SigninPopup(props){
  const {errors, loading, data} = useQuery(FETCH_USERS_QUERY);
  const [email, setEmail] = useState("");
  const context = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setErrors] = useState("");

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

  async function signin(event){
    for (const user of data.getUsers) {
      if (user.email === email) {  
        desiredUser = user;     
      }
    }
    //after here we either found the username or didn't
    if(!desiredUser){
      window.alert("Email does not exist!");
    }else{
        const login = await bcrypt.compare(password, desiredUser.password)
        if(login){
          setUsername(email);
          props.sendData({desiredUser});
          props.typeOfUser(desiredUser.type);
          props.location(desiredUser.location);
          props.setTrigger(false);
        }else{
          window.alert("Incorrect password! Try again");
        }
      } 
  }
  
  if (loading) return null;
 /* if (error) return `${error}`;*/

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

