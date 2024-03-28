import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../../images/logo.png'

export default function Header(){
  return(
    <div id={styles.topBanner}>
      <div id={styles.leftSide}>
        <Link to="/">
          <img id={styles.logoImage} src={logo} alt=""/>
        </Link>
        <h4 id={styles.websiteName}>Loan Sharks Enterprise</h4>
      </div>
      <div id={styles.rightSide}>
        <div className={styles.bannerText}>Help</div>
        <div className={styles.bannerText}>Offers</div>
        <div className={styles.bannerText}>Locations</div>
        <div className={styles.bannerText}>Sign in</div>
      </div>
    </div>
  );
}