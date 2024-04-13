import React, {useState} from 'react'
import styles from './Dropdowns.module.css'

export default function Dropdown(props) {
  const [displayedOption, setdisplayedOption] = useState(props.name)
  const [display, setDisplay] = useState('none');
  const [arrow, setArrow] = useState(props.arrow);

  function handleDisplay() {
    display === 'none'? setDisplay(d => d = 'block') : setDisplay(d => d ='none');
    arrow === '↓'? setArrow(a => a = '↑') : setArrow(a => a = '↓');
  }

  function handlePicked(selectedOption) {
    setdisplayedOption(prevDisplayedOption => prevDisplayedOption = selectedOption);
    setDisplay('none');
    setArrow('↓');
    props.locationPicked(selectedOption);
  }

  return (
      <>
        <div id={styles.top} onClick={handleDisplay}>
            <p>{displayedOption}</p>
            <div>{arrow}</div>
        </div>
        <div id={styles.optionsContainer} style={{display: display}}>
          {props.options.map(option => (
            <div key={option} id={styles.option} onClick={() => handlePicked(option)}>{option}</div>
          ))}
        </div>
      </>
  );
}