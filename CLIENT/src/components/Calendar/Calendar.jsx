import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

export default function OurCalendar(props) {
  const [date, setDate] = useState(new Date());
  const [display, setDisplay] = useState('none');

  function handleDisplay() {
    display === 'none'? setDisplay('block') : setDisplay('none');
}

  return ( 
    <>
      <div className='text-center' onClick={handleDisplay}>{props.name}</div>
      <div className='calendar-container'  style={{display: display}}>
        <Calendar onChange={setDate} value={date} />
      </div>
    </>
  );
}