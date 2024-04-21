import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import styles from './SigninPopup.module.css'


import gql from 'graphql-tag'


export default function SigninPopup(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailFill(event){
    setEmail(event.target.value)
  }

  function passwordFill(event){
    setPassword(event.target.value)
  }

  // const [values, setValues] = useState({
  //   username: "",
  //   password: ""
  // });

  // const [loginUser, {loading}] = useMutation(FETCH_USER_QUERY, {
  //   update(proxy, result){
  //     console.log(result)
  //   },
  //   variables: values
  // })

  function signin(event){



      props.typeOfUser("Admin");
      props.location("Gainesville");
      props.setTrigger(false);
  }

  function createNew() {
    props.typeOfUser("None");
    props.setTrigger(false);
  }

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




const FETCH_USER_QUERY = gql`
   mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`