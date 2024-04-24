import React, {useContext, useState, useEffect} from "react";
import { locationContext } from "../App";
import styles from './Dashboard.module.css'
import Header from "../components/Header/Header";
import CarInfoBox from "../components/CarInfoBox.jsx/CarInfoBox";
import Footer from "../components/Footer/Footer";
import { gql, useQuery } from '@apollo/client';


const FETCH_CAR_QUERY= gql`
query {
  getCars {
    id
    carMake
    carModel
    carColor
    carMileage
    carYear
    carType
    carMaxMilesPerDay
    carMileCostAfterMax
    carCostPerDay
    carLocation
    carStatus
    carReservations
    carIMGstring
  }
  }
`
export default function Dashboard(){
  const {loading, error, data, refetch} = useQuery(FETCH_CAR_QUERY);  
  const [location, setLocation] = useContext(locationContext);
  const [allCars, setAllCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});


  //refetch situation
  function reload(truth){
    if(truth === false){
        window.alert("refetch");
        refetch();
    }
        
}

  useEffect(() => {
    const tempCars = [];
    refetch();
        if(data && data.getCars){
            for (let i = 0; i < data.getCars.length; i++) {
              if (data.getCars[i].carLocation ===  location){
                tempCars.push({
                  id: data.getCars[i].id,
                  make: data.getCars[i].carMake,
                  model: data.getCars[i].carModel,
                  year: data.getCars[i].carYear,
                  color: data.getCars[i].carColor,
                  seats: 5,
                  mileage: data.getCars[i].carMileage,
                  type: data.getCars[i].carType,
                  maxMilesPerDay: data.getCars[i].carMaxMilesPerDay,
                  carMileCostAfterMax: data.getCars[i].carMileCostAfterMax,
                  carCostPerDay: data.getCars[i].carCostPerDay,
                  status: data.getCars[i].carStatus
                });
              }
                     
            }
        }
  
    setAllCars(tempCars);
}, [data, refetch, setAllCars]);

  function getAllCars() {
    return allCars;
  }

  function handleSelectedCar(index) {
    setSelectedCar(e => e = allCars[index]);
  }

  function getCarInfo() {
    return selectedCar;
  }

  return (
    <>
      <Header/>
       <div id={styles.content}>
        <div id={styles.sideBar}>
            <div id={styles.label}>Cars || {location}, FL</div>
              {getAllCars().map((car, index) => (
                  <div key={index} className={styles.carTabs} onClick={() => handleSelectedCar(index)}> 
                      {car.year} {car.make} {car.model}
                  </div>
              ))}
        </div>
        {(typeof selectedCar === 'object') && (Object.keys(selectedCar).length !== 0) ? <CarInfoBox information={getCarInfo()} disabledFields={['make', 'model', 'year', 'color', 'seats', 'mileage', 'type'] } reload={reload}/>
        : ""}
      </div>
      <Footer/>
    </>
  )
}