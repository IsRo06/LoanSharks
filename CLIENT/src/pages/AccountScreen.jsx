import React from 'react';
import { useContext } from 'react';
import { firstNameContext, userContext, usernameContext, lastNameContext, locationContext, passwordContext } from '../App';
import Header from '../components/Header/Header'
import AccountInfoBox from '../components/AccountInfoBox/AccountInfoBox';
import Footer from '../components/Footer/Footer'



export default function AccountScreen(){
  const [firstName, setfirstName] =  useContext(firstNameContext);
  const [lastName, setlastName]=useContext(lastNameContext);;
  const[username, setUsername] = useContext(usernameContext);
  const [userType, setUserType] = useContext(userContext);
  const [location, setLocation] = useContext(locationContext);
  const [password, setPassword]= useContext(passwordContext);
 

  const clientInfo = ["First Name", "Last Name", "Email", "Password", "Verify Password"];
  const employeeAndAdminInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password", "Verify Password"];

  function getAccountInformation() {
      if(userType === "None"){
        return ["", "", "", "", "", ""]
      }else if (userType ==="Client"){
          return [firstName, lastName, username, password, password];
      }else{
        return [firstName, lastName, location, username,password, password];
      }
  }


  return(
    <>
      <Header/>
      <AccountInfoBox infoCategories={userType === "None" || userType === "Client"? clientInfo : employeeAndAdminInfo} information={getAccountInformation()} disabledFields={[]}/>
      <Footer/>
    </>
  )
}