import styles from './CarImageDisplay.module.css'
import sedanImage from '../../images/sedan.jpg'
import suvImage from '../../images/suv.jpg'
import vanImage from '../../images/van.jpg'
import pickupImage from '../../images/pickup.jpg'

export default function CarImageDisplay() {
  return(
    <div id={styles.displayContainer}>
      <p id={styles.label}>Check Out Our Selection</p>
      <div id={styles.allImages}>
        <div className={styles.imageContainer}>
          <img src={suvImage} alt="" className={styles.image}/>
          <p className={styles.carType}>SUVs</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={sedanImage} alt="" className={styles.image}/>
          <p className={styles.carType}>Sedans</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={vanImage} alt="" className={styles.image}/>
          <p className={styles.carType}>Vans</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={pickupImage} alt="" className={styles.image}/>
          <p className={styles.carType}>Pickup Trucks</p>
        </div>
      </div>
    </div>
  );
}