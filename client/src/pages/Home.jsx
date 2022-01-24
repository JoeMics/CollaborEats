import React, { useEffect, useState } from 'react';
import LandingPage from '../components/Home';
import Footer from '../components/Footer';
import { fetchData } from '../services/api';
import Navbar from '../components/Navbar';

const Home = () => {
  const [data, setData] = useState(null);
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
