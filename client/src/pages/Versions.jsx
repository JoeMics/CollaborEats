import React, { useEffect, useState } from 'react';
import VersionComponent from '../components/Versions/index';
const Versions = () => {
  useEffect(() => {
    document.title = `Version - CollaborEats`;
  });
  return (
    <div className="container w-auto h-auto">
      <VersionComponent />
    </div>
  );
};

export default Versions;
