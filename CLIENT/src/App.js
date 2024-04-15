import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import Dashboard from "./pages/CarDashboard.jsx";
import Reservations from "./pages/Reservations.jsx";
import ChatBotBox from "./components/ChatBot/ChatBot.jsx";

import { jwtDecode } from "jwt-decode";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
//import { AuthProvider } from "./context/auth";

export const userContext = React.createContext();
export const locationContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("None");
  const [location, setLocation] = useState("None");

  function RouteRenderer(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.usersAllowed.includes(userType)) {
        navigate('/');
      }
    }, [userType]);

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
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="cars" element={<CarsScreen />} />
              <Route path="account" element={<AccountScreen/>} />
              <Route path="help" element={<ChatBotBox/>}/>
              <Route path="employees" element={<RouteRenderer usersAllowed={["Admin"]} component={EmployeeInfo}/>} />
              <Route path="dashboard" element={<RouteRenderer usersAllowed={["Admin", "Employee"]}  component={Dashboard}/>} />
              <Route path="reservations" element={<RouteRenderer usersAllowed={["Admin", "Employee"]} component={Reservations}/>} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
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


