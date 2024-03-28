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
            <div>
                <input value={username} onChange={usernameFill}></input>
                <input value={password} onChange={passwordFill}></input>
                
                <button onClick={signin}>Submit</button>
            </div>
        </div>
    </div>
    )
  }