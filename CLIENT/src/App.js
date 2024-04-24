import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Reservations from "./pages/Reservations.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import LocationsScreen from "./pages/LocationsScreen.jsx";
import OffersScreen from "./pages/OffersScreen.jsx";


export const usernameContext = React.createContext();
export const firstNameContext = React.createContext();
export const lastNameContext = React.createContext();
export const passwordContext = React.createContext();
export const userContext = React.createContext();
export const locationContext = React.createContext();
export const rentalRangeContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [username, setUsername] = useState("");
  const [firstName, setfirstName] =  useState("");
  const [lastName, setlastName]=useState("");
  const [password, setPassword]= useState("");
  const [location, setLocation] = useState("");
  const [rentalRange, setRentalRange] = useState([0,0,0,0]);

  function RouteRenderer(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.usersAllowed.includes(userType)) {
        navigate('/');
      }
    }, [navigate, props.usersAllowed]);

    return props.usersAllowed.includes(userType) ? <props.component/> : null
  } 


  return(
    <userContext.Provider value={[userType, setUserType]}>
      <usernameContext.Provider value={[username, setUsername]}>
      <firstNameContext.Provider value={[firstName, setfirstName]}>
      <lastNameContext.Provider value={[lastName, setlastName]}>
      <passwordContext.Provider value={[password, setPassword]}>
      <locationContext.Provider value={[location, setLocation]}>
        <rentalRangeContext.Provider value={[rentalRange, setRentalRange]}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomeScreen/>} />
                <Route path="cars" element={<CarsScreen />} />
                <Route path="account" element={<AccountScreen/>} />
                <Route path="employees" element={<RouteRenderer usersAllowed={["Admin"]} component={EmployeeInfo}/>} />
                <Route path="dashboard" element={<RouteRenderer usersAllowed={["Admin", "Employee"]}  component={Dashboard}/>} />
                <Route path="reservations" element={<RouteRenderer usersAllowed={["Admin", "Employee"]} component={Reservations}/>} />
                <Route path="help" element={<HelpPage/>} />
                <Route path="locations" element={<LocationsScreen/>} />
                <Route path="offers" element={<OffersScreen/>} />

                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </rentalRangeContext.Provider>
      </locationContext.Provider>
      </passwordContext.Provider>
      </lastNameContext.Provider>
      </firstNameContext.Provider>
      </usernameContext.Provider>
    </userContext.Provider> 
  )
}