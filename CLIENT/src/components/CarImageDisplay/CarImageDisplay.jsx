import styles from './CarImageDisplay.module.css'
import sedanImage from '../../images/sedan.jpg'
import suvImage from '../../images/suv.jpg'
import vanImage from '../../images/van.jpg'
import pickupImage from '../../images/pickup.jpg'

export default function CarImageDisplay() {
  return(
    <div id={styles.displayContainer}>
      <p>Check Out Our Selection</p>
      <div id={styles.images}>
        <div className={styles.imageContainer}>
          <img src={suvImage} alt="" />
          <p className={styles.carType}>SUVs</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={sedanImage} alt="" />
          <div>Sedans</div>
        </div>
        <div className={styles.imageContainer}>
          <img src={vanImage} alt="" />
          <div>Vans</div>
        </div>
        <div className={styles.imageContainer}>
          <img src={pickupImage} alt="" />
          <div>Pickup Trucks</div>
        </div>
      </div>
    </div>
  );
}