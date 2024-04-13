import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import Dashboard from "./pages/CarDashboard.jsx";
import Reservations from "./pages/Reservations.jsx";

export const userContext = React.createContext();
export const locationContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [location, setLocation] = useState("None");

  
  function RouteRenderer(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (userType !== props.userAllowed || userType !== props.userAllowed_2) {
        navigate('/');
      }
    }, [userType]);

    console.log(userType === props.userAllowed || userType === props.userAllowed_2)
    if (userType === props.userAllowed || userType === props.userAllowed_2) {
      return <props.component/>;
    } 
    else {
      return null;
    }
  }

  return(
    <userContext.Provider value={[userType, setUserType]}>
      <locationContext.Provider value={[location, setLocation]}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="cars" element={<CarsScreen />} />
              <Route path="account" element={<AccountScreen/>} />
              {/* Conditional rendering for EmployeeInfo */}
              <Route path="employees" element={<RouteRenderer userAllowed="Admin" userAllowed_2="None" component={EmployeeInfo}/>} />
              <Route path="dashboard" element={<RouteRenderer userAllowed="Admin" userAllowed_2="Employee"  component={Dashboard}/>} />
              <Route path="reservations" element={<RouteRenderer userAllowed="Admin" userAllowed_2="Employee" component={Reservations}/>} />

              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </locationContext.Provider>
    </userContext.Provider>
  )
}