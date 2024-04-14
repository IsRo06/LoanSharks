import React from 'react';
import { useContext } from 'react';
import { userContext } from '../App';
import Header from '../components/Header/Header'
import AccountInfoBox from '../components/AccountInfoBox/AccountInfoBox';
import Footer from '../components/Footer/Footer'

export default function AccountScreen(){
  const [userType, setUserType] = useContext(userContext);

  const clientInfo = ["First Name", "Last Name", "Email", "Password", "Verify Password"];
  const employeeAndAdminInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password", "Verify Password"];

  function getAccountInformation() {
    return userType === "None"? ["", "", "", "", "", ""] : ["Stephanie", "Fong", "Gainesville", "steph.t.fong@gmail.com", "password123", "password123"];
  }


  return(
    <>
      <Header/>
      <AccountInfoBox infoCategories={userType === "None" || userType === "Client"? clientInfo : employeeAndAdminInfo} information={getAccountInformation()} disabledFields={[]}/>
      <Footer/>
    </>
  )
}