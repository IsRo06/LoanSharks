import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import Dashboard from "./pages/CarDashboard.jsx";
import Reservations from "./pages/Reservations.jsx";
import ChatBotBox from "./components/ChatBot/ChatBot.jsx";


export const usernameContext = React.createContext();
export const firstNameContext = React.createContext();
export const lastNameContext = React.createContext();
export const passwordContext = React.createContext();
export const userContext = React.createContext();
export const locationContext = React.createContext();
export const rentalRangeContext =React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [username, setUsername] = useState("None");
  const [firstName, setfirstName] =  useState("None");
  const [lastName, setlastName]=useState("None");
  const [password, setPassword]= useState("None");
  const [location, setLocation] = useState("None");
  const [rentalRange, setRentalRange] = useState([0, 0, 0, 0]);

  function RouteRenderer(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.usersAllowed.includes(userType)) {
        navigate('/');
      }
    }, [userType]);

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
                <Route path="help" element={<ChatBotBox/>} />

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


