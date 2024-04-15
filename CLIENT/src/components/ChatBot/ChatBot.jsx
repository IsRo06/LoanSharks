import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styles from '../../pages/HomeScreen.module.css';
import styless from './ChatBot.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import oceanImage from '../../images/ocean.png';


const theme = {
    background: '#f5f8fb',
    headerBgColor: 'hsl(208, 46%, 33%)',
    headerFontColor: '#fff',
    headerFontSize: '30px',
    botBubbleColor: 'hsl(208, 46%, 33%)',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

export default function ChatBotBox(){
        return (
            <div id={styles.homeScreen}>
              <Header/>
              <img id={styless.oceanImage2} src={oceanImage} alt="" />
              <div id={styless.ChatBot} className='chat'>
              <ThemeProvider theme={theme}>
                <ChatBot
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        height: '75',
                        width: '50%'
                    }}
                    headerTitle="LoanShark Help Center :D"
                    steps={[
                    {
                        id: '1',
                        message: 'Thanks for considering LoanSharks as your car rental destination!',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        message: "How can I help you today?",
                        trigger: '3',
                    },
                    {
                        id: '3',
                        options: [
                            { value: 1, label: 'Refund Policy', trigger: '4' },
                            { value: 2, label: 'Store Locations', trigger: '5' },
                            { value: 3, label: 'Store hours', trigger: '6' },
                            { value: 4, label: 'Damage policy', trigger:'7'}
                        ],
                    },
                    {
                        id: '4',
                        message: 'Our refund policy states that the rented car should be returned during the 2 hour period chosen when the car is rented out. If the car is not returned during that time period an extra charge will incur and your knee caps will be taken by our Shark Lawyers',
                        trigger: '8'
                    },
                    {
                        id: '5',
                        message: 'We have stores in: Gainesville, FL || Miami, FL || Orlando, FL || Tallahassee, FL || Tampa, FL ',
                        trigger: '8'
                    },
                    {
                        id: '6',
                        message: 'All of our stores  fully operate from 12am until 8pm Monday through Sunday. If you have made a rental outside those hours there will be a staff memeber at the location to assist you with the pick up',
                        trigger: '8'
                    },
                    {
                        id: '7',
                        message: 'If the car is returned in a damaged state your knee caps will be taken by our Shark Lawyers ',
                        trigger: '8'
                    },
                    {
                        id: '8',
                        message: 'Do you need help with anything else? ',
                        trigger: '9'
                    },
                    {
                        id: '9',
                        options: [
                            { value: 1, label: 'Yes', trigger: '3' },
                            { value: 2, label: 'No', trigger: '10' },
                        ],
                    },
                    {
                        id: '10',
                        message: 'Have a good rest of your day!',
                        end: true,
                    },

                    
                    
                    ]}
                />
            </ThemeProvider> 
              </div>
              <Footer/>
            </div>
        );  
}