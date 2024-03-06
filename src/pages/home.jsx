import React, { useRef } from "react";
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";



export default function Home(){


    const emailRef = useRef();
    const ref = collection(firestore, "messages");

    const passRef = useRef();
    const auth = getAuth();

    
    
    

    const handleCreation = async(e) => {
        e.preventDefault();
        
        
        

        
        try{
                createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).then((userCredential)=>{
                    const user = userCredential.user;
                    console.log("User creation", user.email);
                }).catch((error)=>{
                    console.log(error.message);

                });
                
            
            emailRef.current.value = "";
            passRef.current.value = "";
            
        }
        catch(e){
            console.log(e);
            console.log("it did not work");
        }
    }
    const handleLogin = async(e) => {
        e.preventDefault();
        
        

    
        try{

            
                signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email);
                })
                .catch((error) => {
                    console.log("fuck");
                })
            
            emailRef.current.value = "";
            passRef.current.value = "";
        }
        catch(e){
            console.log("fucccck");
        }
    }
    return (
        <div>
            <h1>Create an Account</h1>
            <form onSubmit={handleCreation}>
                <label>Email</label>
                <input type="text" ref={emailRef}></input>
                <label>Password</label>
                <input type="password" ref={passRef}></input>
                <button type="submit">Submit</button>
            </form>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
            <label>Email</label>
                <input type="text" ref={emailRef}></input>
                <label>Password</label>
                <input type="password" ref={passRef}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}