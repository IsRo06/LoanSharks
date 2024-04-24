import React from "react";
import styles from "./LocationsScreen.module.css"
import FloridaIMg from "../images/Map_of_Florida_Regions.png"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function LocationsScreen(){    
    return(
        <>
            <Header/>
            <div id={styles.imageContainer}>
                <img id={styles.stateImg} src={FloridaIMg} alt=""/>
            </div>
            <Footer/>
        </>
    )
}