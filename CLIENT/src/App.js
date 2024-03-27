import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeScreen/>}/>
          <Route path ="/home" element={<HomeScreen/>}/>
          <Route path ="/cars" element={<CarsScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}