import React, {useState, useEffect} from "react";
import styles from './CarsScreen.module.css'
import Header from '../components/Header/Header'
import SearchBox from '../components/SearchBox/SearchBox'
import SearchBoxSaved from '../components/SearchBoxSaved/SearchBoxSaved'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'

export const pickupDateContext = React.createContext();
export const dropoffDateContext = React.createContext();

export default function CarsScreen(){
  const [pickupDate, setpickupDate] = useState([]);
  const [dropoffDate, setdropoffDate] = useState([]);
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
  }, [pickupDate, dropoffDate])


  function getAllAvaliableCars(){
    return allCars;
  }

  return(
    <>
      <Header/>

      <pickupDateContext.Provider value={[pickupDate, setpickupDate]}>
        <dropoffDateContext.Provider value={[dropoffDate, setdropoffDate]}>
          <div id={styles.content}>
            {getAllAvaliableCars().map((car)=> (
              <Card carObject={car}/>
            ))} 
          </div>
        </dropoffDateContext.Provider>
      </pickupDateContext.Provider>

      <Footer/>
    </>
  )
}