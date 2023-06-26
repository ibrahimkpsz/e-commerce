import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import TopProducts from './components/TopProducts/TopProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <TopProducts />
    </>
  );
}

export default App;
