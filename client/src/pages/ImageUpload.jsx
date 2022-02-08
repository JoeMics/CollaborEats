import React, { useState } from 'react';
import axios from 'axios';
import { getAllImages, getSignedURL, uploadS3Img } from '../services/api';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgurl, setImgurl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
      setError('NOT AN IMAGE');
    }
    if (file.size < 5 * 1024 * 1024) {
      setLoading(true);
      const url = await getSignedURL();
      const newUrl = await uploadS3Img(file, url);
      setImgurl(newUrl);
      setLoading(false);
    } else {
      setError('file size exceeded');
    }
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
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileSelect}
                accept="image/png, image/jpeg"
              />
              <label htmlFor="for">Choose File</label>
            </div>
            <input type="submit" value="Submit" className="px-3 bg-blue-400" />
          </form>
          <button type="button" onClick={handleFetch}>
            get all images
          </button>
          {error && <span>{error}</span>}
          <h3>THE IMAGE</h3>
          {!loading && <img src={imgurl} alt="asdf" />}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
