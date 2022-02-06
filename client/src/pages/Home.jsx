import React, { useEffect } from 'react';
import LandingPage from '../components/Home';
import Navbar from '../components/Navbar';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - CollaborEats';
  }, []);

  return (
    <div>
      <Navbar transparent />
      <LandingPage />
    </div>
  );
};

export default Home;
