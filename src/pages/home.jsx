import React, { useRef } from "react";
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"



export default function Home(){


    const emailRef = useRef();
    const ref = collection(firestore, "messages");

    const passRef = useRef();
    
    

    const handleSave = async(e) => {
        e.preventDefault();
        

    let data = {
        email : emailRef.current.value,
        password : passRef.current.value,
    }
    try{
        addDoc(ref, data);

        emailRef.current.value = "";
        passRef.current.value = "";
    }
    catch(e){
        console.log(e);
    }

    }
    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSave}>
                <label>Email</label>
                <input type="text" ref={emailRef}></input>
                <label>Password</label>
                <input type="password" ref={passRef}></input>
                <button type="submit">Save</button>
            </form>
            <h1>Log in</h1>
            <form onSubmit={handleSave}>

            </form>

        </div>
    )
}