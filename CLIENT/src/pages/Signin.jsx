import styles from './Signin.module.css'
import { useState } from 'react'



export default function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameFill(event){
        setUsername(event.target.value)
    }

    function passwordFill(event){
        setPassword(event.target.value)
    }

    function signin(event){
        
    }

    return(
    <div className={styles.background}>
        <div className={styles.mainbox}>
            <input className={styles.usernamebox} value={username} onChange={usernameFill} placeholder="Username"></input>
            <input className={styles.passwordbox} value={password} onChange={passwordFill} placeholder="Password"></input>
            <button onClick={signin}>Submit</button>
            
        </div>
    </div>
    )
  }