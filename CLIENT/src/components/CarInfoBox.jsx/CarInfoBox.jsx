import React, {useState, useEffect} from 'react';
import styles from './CarInfoBox.module.css'
import Dropdown from '../Dropdowns/Dropdowns';
import { gql, useQuery, useMutation } from '@apollo/client';

const UPDATE_CAR = gql`
  mutation UpdateCarInfo($carInput: updateCarInput!) {
  UpdateCarInfo(carInput: $carInput) {
    id
    carMake
    carModel
    carColor
  }
}
`;

export default function CarInfoBox(props){
  const [pressed, setPressed] = useState(false);
  const [sendtodatabase] = useMutation(UPDATE_CAR);
  const [carInfo, setCarInfo] = useState(props.information);
  const [inputsDisabled, setinputsDisabled] = useState(true);
  const [editSaveBtn, setseditSaveBtn] = useState("Edit Car");



  const [status, setStatus] = useState(props.information.status);
  const [maxmilesperday, setMaxMilesPerDay]= useState(0);
  const [milecostaftermax, setMilesCostAfterMax]= useState(0);
  const [costperday, setCostPerDay] =useState(0);
  const [id] =useState(props.information.id);


  async function updatecar(){
    sendtodatabase({variables: { carInput: {id, maxmilesperday, milecostaftermax, costperday, status}}});
    props.reload(pressed);

  }

  useEffect(() => {
    setCarInfo(props.information);
  }, [props.information]);

  function determineIsDisabled(key) {
    if (props.disabledFields.includes(key)) {
      return true;
    }
    else if (inputsDisabled) {
      return true;
    }

    return inputsDisabled;
  }

  function editMode() {
    if (editSaveBtn === "Save Changes"){
      setPressed(true);
      updatecar();
      setPressed(false);
      window.alert("Change have been saved");
    }

    editSaveBtn === "Edit Car" ? setseditSaveBtn(b => "Save Changes") : setseditSaveBtn(b => "Edit Car");
    setinputsDisabled(i => i = !i);
  }

  function handleNewInfo(event, key) {
    const updatedInfo = {...carInfo};
    updatedInfo[key] = event.target.value;
    if(key === "maxMilesPerDay"){
      setMaxMilesPerDay(parseInt(updatedInfo[key]));
    }else if(key === "carMileCostAfterMax"){
      setMilesCostAfterMax(parseInt(updatedInfo[key]))
    }else if(key === "carCostPerDay"){
      setCostPerDay(parseInt(updatedInfo[key]))
    }
    setCarInfo(c => c = updatedInfo);
  }

  function handleStatusChange(newStatus) {
    const updatedInfo = {...carInfo};
    updatedInfo.status =  newStatus;
    setStatus(newStatus);
    setCarInfo(c => c = updatedInfo);
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
                  placeholder={(key.charAt(0).toUpperCase() + key.substring(1)).replace(/([a-z])([A-Z])/g, '$1 $2')} 
                  value={carInfo[key]} onChange={(event) => handleNewInfo(event, key)} />
                  : ""
                }
                {key === "status" ? 
                  <div id={styles.dropDown}>
                      <Dropdown type="Car Status" name={carInfo[key]} options={["Available", "In repair", "Out"]} arrow="↓" disabled={determineIsDisabled(key)} statusChanged={handleStatusChange}/>
                  </div>
                  : ""
                } 
                {key !== "maxMilesPerDay" && key !== "carMileCostAfterMax" && key !== "carCostPerDay" && key !== "status" ? 
                  <input type="text" required={true} disabled={determineIsDisabled(key)}
                  placeholder={(key.charAt(0).toUpperCase() + key.substring(1))} value={carInfo[key]} />
                  : ""
                }
              </div>
            ))}
          </div>
            <button className={styles.btn} onClick={editMode}>{editSaveBtn}</button>
        </div>
      </div>
    </div>
  );
}