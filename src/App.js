import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './components/Categories/Categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/e-commerce" element={<Home />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;