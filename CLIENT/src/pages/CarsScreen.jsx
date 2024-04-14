import React, {useState, useEffect, useContext} from "react";
import { rentalDateContext } from "../App";
import styles from './CarsScreen.module.css'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'

export default function CarsScreen(){
  const [allCars, setAllCars] = useState([]);

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
        carCostPerDay: 100
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
        carCostPerDay: 100
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
        carCostPerDay: 100
      }
    ])
  }, [])


  function getAllAvaliableCars(){
    return allCars;
  }

  return(
    <>
      <Header/>
          <div id={styles.content}>
            {getAllAvaliableCars().map((car, index)=> (
                <Card carObject={car} key={index}/>
            ))} 
          </div>
      <Footer/>
    </>
  )
}