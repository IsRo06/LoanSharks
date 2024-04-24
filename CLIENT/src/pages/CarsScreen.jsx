import styles from './CarsScreen.module.css'
import Header from '../components/Header/Header'
import SearchBox from '../components/SearchBox/SearchBox'
import SearchBoxSaved from '../components/SearchBoxSaved/SearchBoxSaved'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'


export default function CarsScreen(){
  return(
    <>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </>
  )
}