import React from 'react';
import Slider from '../components/Slider/Slider';
import TopProducts from '../components/TopProducts/TopProducts';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
        <Slider />
        <TopProducts />
        <Categories />
        <Footer />
    </>
  )
}
