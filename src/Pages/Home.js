import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import About from '../Components/About';
import Products from '../Components/Products';
import Blog from '../Components/Blog';
import NewsLetter from '../Components/NewsLetter';
import FAQ from '../Components/FAQ';
import End from '../Components/End';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Products />
      <Blog /> 
      <NewsLetter />
      <FAQ />
      <End />  
    </div>
  )
}

export default Home;