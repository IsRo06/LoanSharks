import React, {useState} from 'react'
import styles from './Dropdowns.module.css'

export default function Dropdown(props) {
  const [picked, setPicked] = useState(props.name)
  const [display, setDisplay] = useState('none');

  function handleDisplay() {
      display === 'none'? setDisplay('block') : setDisplay('none');
  }

  function handlePicked(selectedOption) {
    setPicked(prevPicked => prevPicked = selectedOption);
    setDisplay('none');
  }

  return (
      <>
        <div id={styles.top}>
            <p>{picked}</p>
            <div id={styles.arrow} onClick={handleDisplay}>↓</div>
        </div>
        <div id={styles.optionsContainer} style={{display: display}}>
          {props.options.map(option => (
            <div key={option} id={styles.option} onClick={() => handlePicked(option)}>{option}</div>
          ))}
        </div>
      </>
  );
}