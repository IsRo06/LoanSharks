import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import SigninPopup from "../SigninPopup/SigninPopup";

export default function Header(){
  const [signedIn, setsignedIn] = useContext(Context);

  const [popupTriggered, setpopupTriggered] = useState(false);
  const [accountDropdownDisplay, setaccountDropdownDisplay] = useState('none');

  function handleaccountDropdownDisplay(){
    accountDropdownDisplay === 'none' ? setaccountDropdownDisplay(a => a = 'block') : setaccountDropdownDisplay(a => a = 'none');
  }

  function signOut() {
    setsignedIn(s => s = false);
    setaccountDropdownDisplay(a => a = 'none');
  }

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
        {!signedIn? 
          <div className={styles.bannerText} onClick={() => setpopupTriggered(true)}>Sign in</div>
          : <div>
              <div className={styles.bannerText} onClick={handleaccountDropdownDisplay}>Account</div>
              <div id={styles.optionsContainer} style={{display: accountDropdownDisplay}}>
                <div className={styles.options}><Link to='/account' id={styles.link}>Account Information</Link></div>                
                <div className={styles.options}><Link to="/employee-information"id={styles.employeeLink}>Employee Information</Link></div>
                <div className={styles.options}><Link to="/admin-panel"id={styles.adminLink}>Admin Panel</Link></div>
                <div className={styles.options} onClick={signOut}>Sign Out</div>
              </div>
            </div>
        } 
      </div>
      <SigninPopup trigger={popupTriggered} setTrigger={setpopupTriggered} signIn={setsignedIn}></SigninPopup>
    </div>
  );
}