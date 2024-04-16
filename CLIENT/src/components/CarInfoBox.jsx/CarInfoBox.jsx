import React, {useState, useEffect} from 'react';
import styles from './CarInfoBox.module.css'
import Dropdown from '../Dropdowns/Dropdowns';

export default function CarInfoBox(props){
  const [car, setCarInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(true);
  const [editSaveBtn, setseditSaveBtn] = useState("Edit Car");

  useEffect(() => {
    setCarInfo(props.information);
    console.log(car);
  }, [props.information]);

  function determineIsDisabled(key) {
    if (props.disabledFields.includes(key)) {
      return true;
    }
  }

  function editMode() {
    editSaveBtn === "Edit Car" ? setseditSaveBtn(b => "Save Changes") : setseditSaveBtn(b => "Edit Car");
    setinputsDisabled(i => i = !i);
  }

  return (
    <div id={styles.accountInfoBox}>
      <div id={styles.content}>
        <h4>Car Information</h4>

        <div id={styles.infoAndBtn}>
          <div id={styles.allInfo}>
            {Object.entries(props.information).map(([key, value]) => (
              <div key={key} className={styles.informationContainer}>
                <p>{(key.charAt(0).toUpperCase() + key.substring(1)).replace(/([a-z])([A-Z])/g, '$1 $2')}:</p>
                {key === "maxMilesPerDay" || key === "carMileCostAfterMax" || key === "carCostPerDay" ? 
                  <input type="number" required={true} disabled={determineIsDisabled(key)}
                  placeholder={key} value={car[key]} />
                  : ""
                }
                {key === "status" ? 
                  <div id={styles.dropDown}>
                      <Dropdown type="Car Status" name={car[key]} options={["Avaliable", "In repair", "Out"]} arrow="↓" disabled={determineIsDisabled(key)}/>
                  </div>
                  : ""
                } 
                {key !== "maxMilesPerDay" && key !== "carMileCostAfterMax" && key !== "carCostPerDay" && key !== "status" ? 
                  <p>{value}</p>
                  : ""
                }

                                  
                    
              </div>
            ))}
          </div>
            <div id={styles.allBtns}>
              <button className={styles.btn}>Delete Car</button>
              <button className={styles.btn} onClick={editMode}>{editSaveBtn}</button>
            </div>
        </div>
      </div>
    </div>
  );
}