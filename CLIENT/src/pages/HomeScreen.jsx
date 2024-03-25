import styles from './HomeScreen.module.css';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import oceanImage from '../images/ocean.png';

export default function HomeScreen() {
  return (
    <div id={styles.homeScreen}>
      <Header/>
      <img id={styles.oceanImage} src={oceanImage} alt="" />
      <SearchBox/>
    </div>
  );
}
