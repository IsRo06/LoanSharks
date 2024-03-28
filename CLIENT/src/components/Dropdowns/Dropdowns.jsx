import React, {useState} from 'react'
import styles from './Dropdowns.module.css'

export default function Dropdown(props) {
  const [picked, setPicked] = useState(props.name)
  const [display, setDisplay] = useState('none');
  const [arrow, setArrow] = useState(props.arrow);

  function handleDisplay() {
    display === 'none'? setDisplay(d => d = 'block') : setDisplay(d => d ='none');
    arrow === '↓'? setArrow(a => a = '↑') : setArrow(a => a = '↓');
  }

  function handlePicked(selectedOption) {
    setPicked(prevPicked => prevPicked = selectedOption);
    setDisplay('none');
  }

  return (
      <>
        <div id={styles.top}>
            <p>{picked}</p>
            <div id={styles.arrow} onClick={handleDisplay}>{arrow}</div>
        </div>
        <div id={styles.optionsContainer} style={{display: display}}>
          {props.options.map(option => (
            <div key={option} id={styles.option} onClick={() => handlePicked(option)}>{option}</div>
          ))}
        </div>
      </>
  );
}