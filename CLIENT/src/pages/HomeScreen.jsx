import styles from './HomeScreen.module.css';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import CarImageDisplay from '../components/CarImageDisplay/CarImageDisplay';
import Footer from '../components/Footer/Footer';
import oceanImage from '../images/ocean.png';

export default function HomeScreen() {
  return (
    <div id={styles.homeScreen}>
      <Header/>
      <img id={styles.oceanImage} src={oceanImage} alt="" />
      <SearchBox/>
      <CarImageDisplay/>
      <Footer/>
    </div>
  );
}
