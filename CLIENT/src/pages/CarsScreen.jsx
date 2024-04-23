import React, {useState, useEffect, useContext} from "react";
import { rentalRangeContext } from "../App";
import styles from './CarsScreen.module.css'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
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

export default function CarsScreen(){
  const {loading, error, data, refetch} = useQuery(FETCH_CAR_QUERY);  

  const [allCars, setAllCars] = useState([]);
  const [rentalRange, setRentalRange] = useContext(rentalRangeContext);

  useEffect(() => {
    const tempCars = [];
    refetch();
        if(data && data.getCars){
            for (let i = 0; i < data.getCars.length; i++) {
                    tempCars.push({
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
                      carIMGstring: data.getCars[i].carIMGstring
                    });
                
                
            }
        }
    // Update the state of allEmployees with the accumulated employees
    setAllCars(tempCars);
}, [data]);


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