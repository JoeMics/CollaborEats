import React, { useEffect, useState } from 'react';
import LandingPage from '../components/Home';
import Footer from '../components/Footer';
import { fetchData } from '../services/api';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = 'Home - CollaborEats';
  }, []);

  //example
  useEffect(() => {
    async function getAllData() {
      const dbData = await fetchData();
      console.log('dbData: ', dbData.data);
      setData(dbData.data);
      console.log(data);
    }
    getAllData();
  }, []);

  return (
    <div>
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
