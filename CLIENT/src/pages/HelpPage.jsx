import React from "react";
import styles from './HelpPage.module.css'
import Header from "../components/Header/Header";
import oceanImage from '../images/ocean.png'
import ChatBotBox from "../components/ChatBot/ChatBot";
import Footer from "../components/Footer/Footer";

export default function HelpPage(){
  return(
    <>
      <Header/>
      <img src={oceanImage} alt="" id={styles.oceanImage}/>
      <ChatBotBox/>
      <Footer/>
    </>
  )
}