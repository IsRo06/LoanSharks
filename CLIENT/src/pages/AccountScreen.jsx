import React from 'react';
import { useContext } from 'react';
import { Context } from '../App';
import styles from './AccountScreen.module.css'
import Header from '../components/Header/Header'
import AccountInfoBox from '../components/AccountInfoBox/AccountInfoBox';
import Footer from '../components/Footer/Footer'

export default function AccountScreen(){
  const [userType, setUserType] = useContext(Context);

  const clientInfo = ["First Name", "Last Name", "Email", "Password", "Verify Password"];
  const employeeAndAdminInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password", "Verify Password"];

  function getAccountInformation() {
    if (userType === "None") {
      return ["", "", "", "", "", ""];
    }
    else {      
      return ["Stephanie", "Fong", "Gainesville", "steph.t.fong@gmail.com", "password123", "password123"];
    }
  }


  return(
    <>
      <Header/>
      <AccountInfoBox infoCategories={userType === "None" || userType === "Client"? clientInfo : employeeAndAdminInfo} information={getAccountInformation()}/>
      <Footer/>
    </>
  )
}