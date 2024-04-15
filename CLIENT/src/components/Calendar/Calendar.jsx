import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

export default function OurCalendar(props) {
  const months = [{number: 0, name: 'January'}, {number: 1, name: 'February'}, 
                  {number: 2, name: 'March'}, {number: 3, name: 'April'},
                  {number: 4, name: 'May'}, {number: 5, name: 'June'},
                  {number: 6, name: 'July'}, {number: 7, name: 'August'},
                  {number: 8, name: 'September'}, {number: 9, name: 'October'},
                  {number: 10, name: 'November'}, {number: 11, name: 'December'}]

  const [date, setDate] = useState(new Date());
  const [displayedDate, setdisplayedDate] = useState(props.name);
  const [arrow, setArrow] = useState(props.arrow);
  const [display, setDisplay] = useState('none');

  function handleDisplay() {
    display === 'none'? setDisplay(d => d = 'block') : setDisplay(d => d ='none');
    arrow === '↓'? setArrow(a => a = '↑') : setArrow(a => a = '↓');
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
    setArrow('↓');

    if (props.name === "Pick-up Date") {
      let updatedRentalRange = [...props.range];
      updatedRentalRange[0] = date.getMonth() + 1;
      updatedRentalRange[1] = date.getDate();

      props.setRange(updatedRentalRange);
    }
    else if (props.name === "Drop-off Date") {
      let updatedRentalRange = [...props.range];
      updatedRentalRange[2] = date.getMonth() + 1;
      updatedRentalRange[3] = date.getDate();
  
      props.setRange(updatedRentalRange);
    }
  }

  return ( 
    <>
      <div id="top" onClick={handleDisplay}>
        <p>{displayedDate}</p>
        <div>{arrow}</div>
      </div>
      <div id="calendarContainer"  style={{display: display}}>
        <Calendar onChange={handleDate} value={date}/>
      </div>
    </>
  );
}