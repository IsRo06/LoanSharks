import React from "react";
import Header from "../components/Header/Header";
import styles from "./OffersScreen.module.css";
import oceanImage from '../images/ocean.png';


export default function OffersScreen(){


    return(
        <div>
            <Header></Header>
            <img id={styles.oceanImage} src={oceanImage} alt="" />
            <div>Offer Screen</div>
            
        </div>
        
    );
}