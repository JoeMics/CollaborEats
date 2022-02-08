import React, { useState } from 'react';
import axios from 'axios';
import { getAllImages, getSignedURL, uploadS3Img } from '../services/api';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await getSignedURL();
    const newUrl = await uploadS3Img(file, url);
  };

  const handleFileSelect = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleFetch = async () => {
    try {
      const response = await getAllImages();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="m-auto">
          <h1 className="font-bold text-xl text-center my-4">Upload Files</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="file" name="file" id="file" onChange={handleFileSelect} />
              <label htmlFor="for">Choose File</label>
            </div>
            <input type="submit" value="Submit" className="px-3 bg-blue-400" />
          </form>
          <button type="button" onClick={handleFetch}>
            get all images
          </button>
          <h3>THE IMAGE</h3>
          <img
            src="https://collaboreats-s3-bucket.s3.us-west-1.amazonaws.com/02dc685b6e51563fe4d00a13dd50539e"
            alt="asdf"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
