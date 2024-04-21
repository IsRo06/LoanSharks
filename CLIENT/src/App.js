import React, { useState, useEffect } from "react";
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

import { jwtDecode } from "jwt-decode";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
//import { AuthProvider } from "./context/auth";

export const userContext = React.createContext();
export const locationContext = React.createContext();
export const rentalRangeContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [location, setLocation] = useState("None");
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

  /*var decodedToken = [];

  if (localStorage.getItem("jwtToken")) {
    decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  }

  var { data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: decodedToken.id
    }
  });*/

  return(
    /*<AuthProvider>*/
    <userContext.Provider value={[userType, setUserType]}>
      <locationContext.Provider value={[location, setLocation]}>
        <rentalRangeContext.Provider value={[rentalRange, setRentalRange]}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomeScreen />} />
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
    </userContext.Provider>
    /*</AuthProvider>*/
    
  )

  /*const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      permission
    }
  }
`;*/
}


