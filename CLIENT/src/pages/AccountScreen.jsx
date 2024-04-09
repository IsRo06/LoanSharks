import styles from './AccountScreen.module.css'
import Header from '../components/Header/Header'
import AccountInfoBox from '../components/AccountInfoBox/AccountInfoBox';
import Footer from '../components/Footer/Footer'

export default function AccountScreen(){
  const clientInfo = ["First Name", "Last Name", "Email", "Password", "Verify Password"];
  const adminInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password", "Verify Password"];

  return(
    <>
      <Header/>
      <AccountInfoBox info={adminInfo}/>
      <Footer/>
    </>
  )
}