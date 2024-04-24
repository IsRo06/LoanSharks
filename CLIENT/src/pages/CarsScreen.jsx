import React, {useState, useEffect, useContext} from "react";
import { rentalRangeContext } from "../App";
import styles from './CarsScreen.module.css'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import { gql, useQuery, useMutation } from '@apollo/client';


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
  //display cars not busy during those dates.

 

  useEffect(() => {
    const tempCars = [];
    if(data && data.getCars){
      refetch();
    }
        if(data && data.getCars){
            for (let i = 0; i < data.getCars.length; i++) {
              if (
                (rentalRange[0] >= data.getCars[i].carReservations[0] && rentalRange[0] <= data.getCars[i].carReservations[2]) || // Check if client's pickup month is between reservation's pickup and dropoff months
                (rentalRange[2] >= data.getCars[i].carReservations[0] && rentalRange[2] <= data.getCars[i].carReservations[2]) || // Check if client's dropoff month is between reservation's pickup and dropoff months
                (rentalRange[0] <= data.getCars[i].carReservations[0] && rentalRange[2] >= data.getCars[i].carReservations[2]) || // Check if client's rental period spans the entire reservation period
                (rentalRange[0] === data.getCars[i].carReservations[0] && rentalRange[2] === data.getCars[i].carReservations[2] && // Check if client's rental period matches reservation period exactly
                    (rentalRange[1] <= data.getCars[i].carReservations[3] && rentalRange[3] >= data.getCars[i].carReservations[1]))
            ) {

            }else{
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
                carIMGstring: data.getCars[i].carIMGstring
              });
            }
                    
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