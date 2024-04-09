import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import AccountScreen from "./pages/AccountScreen.jsx";
import EmployeeInfo from "./pages/EmployeeInfo.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

export default function App() {
  return(
    <div>
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
    </div>
  )
}