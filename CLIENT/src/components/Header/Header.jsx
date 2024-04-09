import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import SigninPopup from "../SigninPopup/SigninPopup";

export default function Header(){
  const [popupTriggered, setpopupTriggered] = useState(false);
  const [signedIn, setsignedIn] = useState(false);
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
          : <div id={styles.accountDropdown}>
              <div className={styles.bannerText} onClick={handleaccountDropdownDisplay}>Account</div>
              <div id={styles.optionsContainer} style={{display: accountDropdownDisplay}}>
                <div className={styles.options}><Link to='/account' id={styles.link}>Information</Link></div>
<<<<<<< HEAD
=======
                <div className={styles.options}><Link to="/employee-information"id={styles.employeeLink}>Employee info</Link></div>
                <div className={styles.options}><Link to="/admin-panel"id={styles.adminLink}>Admin Panel</Link></div>
>>>>>>> d0e25dc6a2f156f010ce1f21be2db46bb41bdf37
                <div className={styles.options} onClick={signOut}>Sign Out</div>
              </div>
            </div>
        } 
      </div>
      <SigninPopup trigger={popupTriggered} setTrigger={setpopupTriggered} signIn={setsignedIn}></SigninPopup>
    </div>
  );
}