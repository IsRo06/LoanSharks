import penguinImage from '../../images/penguins.jpg'
import styles from './Card.module.css'
import PropTypes from 'prop-types'

function Card(props){
  let fullType = props.default ? props.name : "Midsize SUV";
  return(
    <div className={styles.card}>
      <img className={styles.cardImage} src={penguinImage} alt="profile picture" />
      <div className={styles.textWrapper}>
        <p className={styles.cardTitle}>Vehicle Type: {fullType}</p>
        <p className={styles.cardText}>Vehicle Name: {props.name}</p>
        <p className={styles.cardText}>Number of Seats: {props.seats}</p>
        <p className={styles.cardText}>Tired: {props.isTired ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  seats: PropTypes.string,
  isTired: PropTypes.bool
}

Card.defaultProps = {
  name: "Weinermobile",
  seats: "5",
  isTired: false
}

export default Card