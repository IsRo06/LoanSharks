import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import HomeScreen from "./pages/HomeScreen.jsx";
import CarsScreen from './pages/CarsScreen.jsx'
import Signin from "./pages/Signin.jsx";

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="cars" element={<CarsScreen />} />
            <Route path="signin" element={<Signin/>}/>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}