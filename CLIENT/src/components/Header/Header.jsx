import React from "react";
import { useState, useContext } from "react";
import { userContext, locationContext, usernameContext, firstNameContext, lastNameContext, passwordContext } from "../../App";
import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import SigninPopup from "../SigninPopup/SigninPopup";

export default function Header(){
  const [firstName, setfirstName] =  useContext(firstNameContext);
  const [lastName, setlastName]=useContext(lastNameContext);;
  const[username, setUsername] = useContext(usernameContext);
  const [userType, setUserType] = useContext(userContext);
  const [location, setLocation] = useContext(locationContext);
  const [password, setPassword] = useContext(passwordContext);

  function sendData({desiredUser}) {
    setfirstName(desiredUser.firstName);
    setlastName(desiredUser.lastName);
    setUsername(desiredUser.email);
    setUserType(desiredUser.type);
    setLocation(desiredUser.location);
    setPassword(desiredUser.password);
    
  }

  const [popupTriggered, setpopupTriggered] = useState(false);
  const [accountDropdownDisplay, setaccountDropdownDisplay] = useState('none');

  function handleaccountDropdownDisplay(){
    accountDropdownDisplay === 'none' ? setaccountDropdownDisplay(a => a = 'block') : setaccountDropdownDisplay(a => a = 'none');
  }

  function signOut() {
    setUserType(u => u = "None");
    setLocation(l => l = "None");
    setaccountDropdownDisplay(a => a = 'none');
  }

  return(
    <div id={styles.topBanner}>
      <div id={styles.leftSide}>
        <Link to="/"><img id={styles.logoImage} src={logo} alt=""/></Link>
        <h4 id={styles.websiteName}>Loan Sharks Enterprise</h4>
      </div>
      <div id={styles.rightSide}>
        <Link to="/help" className={styles.link}><div className={styles.bannerText}>Help</div></Link>



        <Link to="/offers" className={styles.link}><div className={styles.bannerText}>Offers</div></Link>
        <Link to="/locations" className={styles.link}><div className={styles.bannerText}>Locations</div></Link>
        {/* <div className={styles.bannerText}>Locations</div> */}



        {userType === "None"? 
          <div className={styles.bannerText} onClick={() => setpopupTriggered(t => t = true)}>Sign in</div>
          : <div>
              <div className={styles.bannerText} onClick={handleaccountDropdownDisplay}>{username}</div>
              <div id={styles.optionsContainer} style={{display: accountDropdownDisplay}}>
                <div className={styles.options}><Link to='/account' className={styles.link}>Account Information</Link></div>

                {userType === "Admin"? 
                  <div className={styles.options}><Link to='/employees' className={styles.link}>Employee Information</Link></div>
                  : ""               
                }
                
                {userType === "Employee" || userType === "Admin"? 
                  <>
                    <div className={styles.options}><Link to='/dashboard' className={styles.link}>Cars Dashboard</Link></div>
                    <div className={styles.options}><Link to='/reservations' className={styles.link}>Upcoming Reservations</Link></div>                
                  </>
                  : ""               
                }
                
                <div className={styles.options} onClick={signOut}>Sign Out</div>
              </div>
            </div>
        } 
      </div>
      <SigninPopup trigger={popupTriggered} setTrigger={setpopupTriggered} typeOfUser={setUserType} location={setLocation} sendData={sendData}></SigninPopup>
    </div>
  );
}