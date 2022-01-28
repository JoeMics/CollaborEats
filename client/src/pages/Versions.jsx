import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import VersionComponent from '../components/Versions/index';
const Versions = () => {
  useEffect(() => {
    document.title = `Version - CollaborEats`;
  });
  return (
    <>
      <Navbar />
      <div className="container w-auto h-auto">
        <VersionComponent />
      </div>
    </>
  );
};

export default Versions;
