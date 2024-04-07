import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import SigninPopup from "../SigninPopup/SigninPopup";

export default function Header(){
  const [popupTriggered, setpopupTriggered] = useState(false);
  const [signedIn, setsignedIn] = useState(false);

  return(
    <div id={styles.topBanner}>
      <div id={styles.leftSide}>
        <Link to="/"><img id={styles.logoImage} src={logo} alt=""/></Link>
        <h4 id={styles.websiteName}>Loan Sharks Enterprise</h4>
      </div>
      <div id={styles.rightSide}>
        <div className={styles.bannerText}>Help</div>
        <div className={styles.bannerText}>Offers</div>
        <div className={styles.bannerText}>Locations</div>
        {!signedIn? <div className={styles.bannerText} onClick={() => setpopupTriggered(true)}>Sign in</div>
          : <div className={styles.bannerText}>Account</div>};
      </div>
      <SigninPopup trigger={popupTriggered} setTrigger={setpopupTriggered} signIn={setsignedIn}></SigninPopup>
    </div>
  );
}