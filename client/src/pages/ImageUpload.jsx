import React, { useState } from 'react';
import axios from 'axios';
import { getAllImages } from '../services/api';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/upload',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('the file name: ', response.data.file.filename);
    } catch (error) {
      console.log(error);
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
              <input type="file" name="file" id="file" onChange={handleFileSelect} />
              <label htmlFor="for">Choose File</label>
            </div>
            <input type="submit" value="Submit" className="px-3 bg-blue-400" />
          </form>
          <button type="button" onClick={handleFetch}>
            get all images
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
