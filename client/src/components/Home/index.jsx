import React from 'react';
import Hero from './Hero';
import Jumbotron from './Jumbotron';
import jumbotronData from '../../data/jumbo-data';

const Home = () => {
  return (
    <>
      <Hero />
      {jumbotronData.map((jumbotron) => (
        <Jumbotron
          key={jumbotron.id}
          direction={jumbotron.direction}
          imgSrc={jumbotron.imgSrc}
          description={jumbotron.description}
          background={jumbotron.background}
        />
      ))}
    </>
  );
};

export default Home;
