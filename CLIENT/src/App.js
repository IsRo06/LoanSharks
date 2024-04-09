import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

export const Context = React.createContext();

export default function App() {
  const [signedIn, setsignedIn] = useState(false);

  return(
    <Context.Provider value={[signedIn, setsignedIn]}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
            <Route path="cars" element={<CarsScreen />} />
            <Route path="account" element={<AccountScreen/>} />
            <Route path="employee-information" element={<EmployeeInfo/>} />
            <Route path="admin-panel" element={<AdminPanel/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}