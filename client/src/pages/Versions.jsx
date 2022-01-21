import React, { useEffect, useState } from 'react';
import VersionComponent from '../components/Versions/index';
const Versions = () => {
  useEffect(() => {
    document.title = `Version - CollaborEats`;
  });
  return (
    <div>
      <VersionComponent />
    </div>
  );
};

export default Versions;
