import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

export default function OurCalendar(props) {
  const months = [{number: 0, name: 'January'}, {number: 1, name: 'February'}, 
                  {number: 2, name: 'March'}, {number: 3, name: 'April'},
                  {number: 4, name: 'May'}, {number: 5, name: 'June'},
                  {number: 6, name: 'July'}, {number: 7, name: 'August'},
                  {number: 8, name: 'September'}, {number: 9, name: 'October'},
                  {number: 10, name: 'November'}, {number: 11, name: 'December'}
                  ]

  const [date, setDate] = useState(new Date());
  const [displayedDate, setdisplayedDate] = useState(props.name);
  const [display, setDisplay] = useState('none');

  function handleDisplay() {
    display === 'none'? setDisplay('block') : setDisplay('none');
  }

  const handleDate = date => {
    setDate(date);
    let month = "";
    for (let i = 0; i < months.length; i++) {
      if (months[i].number === date.getMonth()) {
        month = months[i].name;
        break;
      }
    }
    const dateInWords = `${month} ${date.getDate()}, ${date.getFullYear()}`
    setdisplayedDate(prevdisplayedDate => prevdisplayedDate = dateInWords);
    setDisplay('none');
  }

  return ( 
    <>
      <div id="top">
        <p>{displayedDate}</p>
        <div id="arrow" onClick={handleDisplay}>↓</div>
      </div>
      <div id="calendarContainer"  style={{display: display}}>
        <Calendar onChange={handleDate} value={date}/>
      </div>
    </>
  );
}