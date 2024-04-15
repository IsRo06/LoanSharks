import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { locationContext, rentalRangeContext } from '../../App.js';
import styles from './SearchBox.module.css'
import Dropdown from '../Dropdowns/Dropdowns.jsx';
import OurCalendar from '../Calendar/Calendar.jsx';
import calandarIcon from '../../images/calandar-icon.jpg';
import clockIcon  from '../../images/clock-icon.jpg';
import locationIcon from '../../images/location-icon.jpg';

export default function SearchBox(){
  const [location, setLocation] = useContext(locationContext);
  const [rentalRange, setRentalRange] = useContext(rentalRangeContext);
  const [rentalTimes, setRentalTimes] = useState(["0","0"]);

  const navigate = useNavigate();

  const locations = [ 'Gainesville', 'Orlando', 'Miami', 'Tallahassee', 'Tampa'];
  const times = ['12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', '7:00AM', 
                '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', 
                '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM']

  function handleSearch() {
    // if (rentalRange.includes(0) || rentalTimes.includes("0") || location === "None"){
    //   window.alert("Please fill out all the search boxes")
    // }
    // else if ((rentalRange[0] > rentalRange[2]) || ((rentalRange[0] === rentalRange[2]) && (rentalRange[1] > rentalRange[3])) ) {
    //   window.alert("Drop-off Date is before Pick-up Date");
    // }
    // else if (((rentalRange[0] === rentalRange[2]) && (rentalRange[1] === rentalRange[3])) && (times.indexOf(rentalTimes[0]) > times.indexOf(rentalTimes[1]))) {
    //   window.alert("Drop-off Time is before Pick-up Time");
    // }
    // else {
    //   navigate('/cars')
    // }
    navigate('/cars');
  }

  return(
    <div id={styles.searchBox}>
      <h4>Find a Vehicle</h4>
      <div id={styles.pickUpLocation}>
        <img src={locationIcon} alt=""/>
        <div className={styles.searchBoxText}>
          <label>Pick-up</label>
          <div className={styles.dropDown} style={{zIndex: 50}}>
            <Dropdown type="Location" name="Pick-up Location" options={locations} arrow="↓" locationPicked={setLocation} disabled={false}/>
          </div>
        </div>
      </div>

      <div id={styles.dateAndTime}>
        <div className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Pick-up Date</label>
            <div className={styles.calendar} style={{zIndex:40}}>
              <OurCalendar name="Pick-up Date" arrow="↓" range={rentalRange} setRange={setRentalRange}/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Pick-up Time</label>
            <div className={styles.dropDown} style={{zIndex:30}}>
              <Dropdown type="Time" name="Pick-up Time" options={times} arrow="↓" disabled={false} range={rentalTimes} setTime={setRentalTimes}/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={calandarIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Drop-off Date</label>
            <div className={styles.calendar} style={{zIndex:20}}>
              <OurCalendar name="Drop-off Date" arrow="↓" range={rentalRange} setRange={setRentalRange}/>
            </div>
          </div>
        </div>

        <div className={styles.dateAndTimeContainer}>
          <img src={clockIcon} alt=""/>
          <div className={styles.searchBoxText}>
            <label>Drop-off Time</label>
            <div className={styles.dropDown} style={{zIndex:10}}>
              <Dropdown type="Time" name="Drop-off Time" options={times} arrow="↓" disabled={false} range={rentalTimes} setTime={setRentalTimes}/>
            </div>
          </div>
        </div>

      </div>
      <button id={styles.searchBtn} onClick={handleSearch}>Search</button>
    </div>
  );

}