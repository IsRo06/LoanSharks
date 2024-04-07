import styles from './AccountScreen.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function AccountScreen(){
  return(
    <>
      <Header></Header>
      <div id={styles.wholePage}>
        <div id={styles.content}>
          <h4>Account Information</h4>
          <p id={styles.instructions}>Please fill out the boxes below</p>
          <div className={styles.informationContainer}>
            <p>First Name:</p>
            <input type="text" placeholder='First Name'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Last Name:</p>
            <input type="text" placeholder='Last Name'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Address:</p>
            <input type="text" placeholder='Address'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Birthday:</p>
            <input type="text" placeholder='Birthday'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Email:</p>
            <input type="text" placeholder='Email'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Password:</p>
            <input type="text" placeholder='Password'/>
          </div>
          <div className={styles.informationContainer}>
            <p>Verify Password:</p>
            <input type="text" placeholder='Password'/>
          </div>
          <button id={styles.bottomBtn}>Create Account</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}