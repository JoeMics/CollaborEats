import React, { useEffect, useState } from 'react';
import LandingPage from '../components/Home';
import Footer from '../components/Footer';
import { fetchData } from '../services/api';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = 'Home - CollaborEats';
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
