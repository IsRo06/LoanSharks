import React from "react";
import Header from "../components/Header/Header";
import styles from "./OffersScreen.module.css";
import oceanImage from '../images/ocean.png';
import Footer from "../components/Footer/Footer";
import sedanImage from '../images/sedan.jpg'
import suvImage from '../images/suv.jpg'
import vanImage from '../images/van.jpg'


export default function OffersScreen(){


    return(
        <div id={styles.screen}>
            <Header></Header>
            <img id={styles.oceanImage} src={oceanImage} alt="" />
            <div className={styles.space}></div>
            <div className={styles.offersbox}>
                <div className={styles.offer1}>
                    <div className={styles.offerLeftside}>
                            <div className={styles.offerLefttop}>Sedan: Toyota Camry 2020</div>
                            <div className={styles.offerLeftmid}>MPG: 32, Mileage: 55,627, Location: any</div>
                            <div className={styles.offerLeftbot}>20% discount on total renting rate! Reserve today! </div>
                        </div>

                    <div className={styles.offerRightside}>
                        <img src={sedanImage} alt="" className={styles.image}/>
                    </div>

                </div>
                <div className={styles.offer2}>
                    <div className={styles.offerLeftside}>
                            <div className={styles.offerLefttop}>SUV: Honda CRV 2022</div>
                            <div className={styles.offerLeftmid}>MPG: 28, Mileage: 28,819, Location: any</div>
                            <div className={styles.offerLeftbot}>10% discount on total renting rate! Reserve today!</div>
                        </div>

                        <div className={styles.offerRightside}>
                            <img src={suvImage} alt="" className={styles.image}/>
                        </div>
                </div>
                <div className={styles.offer3}>

                    <div className={styles.offerLeftside}>
                        <div className={styles.offerLefttop}>Van: Ford Transit 2018</div>
                        <div className={styles.offerLeftmid}>MPG: 21, Mileage: 73,425, Location: Gainesville</div>
                        <div className={styles.offerLeftbot}>First day and 50 miles free! Reserve today!</div>
                    </div>

                    <div className={styles.offerRightside}>
                        <img src={vanImage} alt="" className={styles.image}/>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
        
    );
}