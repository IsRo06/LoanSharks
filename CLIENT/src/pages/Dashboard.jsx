import React, {useContext, useState, useEffect} from "react";
import { locationContext } from "../App";
import styles from './Dashboard.module.css'
import Header from "../components/Header/Header";
import CarInfoBox from "../components/CarInfoBox.jsx/CarInfoBox";
import Footer from "../components/Footer/Footer";

export default function Dashboard(){
  const [location, setLocation] = useContext(locationContext);
  const [allCars, setAllCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState([]);

  useEffect(() => {
    setAllCars(c => c = [
      { make: "Toyota",
        model: "Corolla",
        year: 2012,
        color: "White",
        seats: 5,
        mileage: 123,
        type: "Sedan", 
        maxMilesPerDay: 100,
        carMileCostAfterMax: 100,
        carCostPerDay: 100,
        status: "In repair"
      }, 
      { make: "Toyota",
        model: "Corolla",
        year: 2012,
        color: "White",
        seats: 5,
        mileage: 123,
        type: "Sedan", 
        maxMilesPerDay: 100,
        carMileCostAfterMax: 100,
        carCostPerDay: 100,
        status: "Avaliable"
      },
      { make: "Toyota",
        model: "Corolla",
        year: 2012,
        color: "White",
        seats: 5,
        mileage: 123,
        type: "Sedan", 
        maxMilesPerDay: 100,
        carMileCostAfterMax: 100,
        carCostPerDay: 100,
        status: "Out"
      }
    ])
  }, [])

  function getAllCars() {
    return allCars;
  }

  function handleSelectedCar(index) {
    setSelectedCar(e => e = allCars[index]);
  }

  function getCarInfo() {
    if (selectedCar.length === 0){
      return [];
    } 
    else {
      return selectedCar;
    }
  }

  function emptyInfoBox() {
    setSelectedCar(c => c = []);
  }

  return (
    <>
      <Header/>
       <div id={styles.content}>
        <div id={styles.sideBar}>
            <div id={styles.label} onClick={emptyInfoBox}>Cars || {location}, FL</div>
              {getAllCars().map((car, index) => (
                  <div key={index} className={styles.carTabs} onClick={() => handleSelectedCar(index)}> 
                      {car.year} {car.make} {car.model}
                  </div>
              ))}
        </div>
        {selectedCar.length === 0 ? <CarInfoBox information={getCarInfo()} disabledFields={["make", "model", "year", "color", "seats", "mileage", "type"]} />
        : <CarInfoBox information={getCarInfo()} disabledFields={[]}/>
        }
      </div>
      <Footer/>
    </>
  )
}