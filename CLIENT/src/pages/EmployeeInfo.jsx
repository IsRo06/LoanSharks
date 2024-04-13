import React from "react";
import { useContext } from "react";
import styles from "./EmployeeInfo.module.css"
import { locationContext } from "../App";
import Header from '../components/Header/Header';
import AccountInfoBox from "../components/AccountInfoBox/AccountInfoBox";
import Footer from "../components/Footer/Footer";

export default function EmployeeInfo() {
    const [location, setLocation] = useContext(locationContext);

    const info = ["First Name", "Last Name", "Place of Employment", "Email", "Password", "Verify Password"];

    function getAccountInformation() {
        return ["Stephanie", "Fong", "Gainesville", "steph.t.fong@gmail.com", "password123", "password123"];
    }

    return(
        <>
            <Header/>

            <AccountInfoBox infoCategories= {info} information={getAccountInformation()}/>
            <Footer/>
        </>
    );
}
