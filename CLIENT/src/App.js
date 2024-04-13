import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";

export const userContext = React.createContext();
export const locationContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [location, setLocation] = useState("None");

  return(
    <userContext.Provider value={[userType, setUserType]}>
      <locationContext.Provider value={[location, setLocation]}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="cars" element={<CarsScreen />} />
              <Route path="account" element={<AccountScreen/>} />
              {/* <Route path="dashboard" element={} />
              <Route path="reservations" element={} /> */}
              <Route path="employees" element={<EmployeeInfo/>} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </locationContext.Provider>
    </userContext.Provider>
  )
}