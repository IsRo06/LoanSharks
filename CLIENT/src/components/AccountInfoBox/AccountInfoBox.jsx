import styles from './AccountInfoBox.module.css'

export default function AccountInfoBox(props){


  return (
    <div id={styles.background}>
      <div id={styles.content}>
        <h4>Account Information</h4>
        <p id={styles.instructions}>Please fill out the boxes below</p>

        {props.info.map(information => (
          <div key={information} className={styles.informationContainer}>
            <p>{information}:</p>
            <input type="text" placeholder={information}/> 
          </div>
        ))}

        <button id={styles.bottomBtn}>Create Account</button>
      </div>
    </div>
  );
}