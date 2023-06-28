import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import Men_Clothing from './pages/Men_Clothing';
import Women_Clothing from './pages/Women_Clothing';
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
        <Route path="/category/electronics" element={<Electronics />} />
        <Route path="/category/jewelery" element={<Jewelery />} />
        <Route path="/category/men's clothing" element={<Men_Clothing />} />
        <Route path="/category/women's Clothing" element={<Women_Clothing />} />
      </Routes>
    </>
  );
}

export default App;

{/* <Header />
<Navbar />
<Slider />
<TopProducts />
<Categories /> */}