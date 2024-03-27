import React, {useState} from 'react'
import styles from './SearchBox.module.css'
import Dropdown from '../Dropdowns/Dropdowns.jsx';
import OurCalendar from '../Calendar/Calendar.jsx';
import calandarIcon from '../../images/calandar-icon.jpg';
import clockIcon  from '../../images/clock-icon.jpg';
import locationIcon from '../../images/location-icon.jpg';

export default function SearchBox(){
  const locations = [ 'Gainesville', 'Orlando', 'Miami', 'Tallahassee', 'Tampa'];
  const times = ['12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', '7:00AM', 
                '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', 
                '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM',  ]

  const [pickupLocation, setpickupLocation] = useState("");
  const [pickupDate, setpickupDate] = useState([]);
  const [pickupTime, setpickupTime] = useState("");
  const [dropoffDate, setdropoffDate] = useState([]);
  const [dropoffTime, setdropoffTime] = useState("");

  return(
    <div id={styles.searchBox}>
      <h4>Find a Vehicle</h4>
      <div id={styles.pickUpLocation}>
        <img src={locationIcon} alt=""/>
        <div className={styles.searchBoxText}>
          <label>Pick-up</label>
          <div className={styles.dropDown} style={{zIndex: 50}}>
            <Dropdown name="Pick-up Location" options={locations}/>
          </div>
        </div>
      </div>

      <div id={styles.dateAndTime}>
        <div className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Pick-up Date</label>
            <div className={styles.calendar} style={{zIndex:40}}>
              <OurCalendar name="Pick-up Date"/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Pick-up Time</label>
            <div className={styles.dropDown} style={{zIndex:30}}>
              <Dropdown name="Pick-up Time" options={times}/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Drop-off Date</label>
            <div className={styles.calendar} style={{zIndex:20}}>
              <OurCalendar name="Drop-off Date"/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Drop-off Time</label>
            <div className={styles.dropDown} style={{zIndex:10}}>
              <Dropdown name="Drop-off Time" options={times}/>
            </div>
          </div>
        </div>

      </div>
      <button id={styles.searchBtn}>Search</button>
    </div>
  );

}