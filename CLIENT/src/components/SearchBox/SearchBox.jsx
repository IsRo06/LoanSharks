import styles from './SearchBox.module.css'
import calandarIcon from '../../images/calandar-icon.jpg';
import clockIcon  from '../../images/clock-icon.jpg';
import locationIcon from '../../images/location-icon.jpg';

export default function SearchBox(){
  return(
    <div id={styles.searchBox}>
      <h4>Find a Vehicle</h4>
      <form id={styles.pickUpLocation}>
        <img src={locationIcon} alt=""/>
        <div className={styles.searchBoxText}>
          <p>Pick-up</p>
          <input type="text" placeholder="Pick-up"/>
        </div>
      </form>
      <div id={styles.dateAndTime}>
        <form className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <p>Pick-up Date</p>
            <input type="text" placeholder="Pick-up Date" />
          </div>
        </form>
        <form className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <p>Pick-up Time</p>
            <input type="text" placeholder="Pick-up Time" />
          </div>
        </form>
        <form className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <p>Drop-off Date</p>
            <input type="text" placeholder="Drop-off Date" />
          </div>
        </form>
        <form className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <p>Drop-off Time</p>
            <input type="text" placeholder="Drop-off Time" />
          </div>
        </form>
      </div>
      <button id={styles.searchBtn}>Search</button>
    </div>
  );

}