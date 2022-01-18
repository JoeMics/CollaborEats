import React, { useEffect, useState } from 'react';
import LandingPage from '../components/Home';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = `'Home - CollaborEats'`;
  },[])
  
  return ( 
  <div>
    <LandingPage />
    <Footer />
  </div> );
}
 
export default Home;
