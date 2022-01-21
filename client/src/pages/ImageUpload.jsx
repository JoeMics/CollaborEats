import React from 'react';

const ImageUpload = () => {
  return (
    <div className="container">
      <div className="flex-row">
        <div className="m-auto">
          <h1 className="font-bold text-xl text-center my-4">Upload Files</h1>
          <form action="http://localhost:8080/upload" method="POST" enctype="multipart/form-data">
            <div className="custom-file mb-3">
              <input type="file" name="file" id="file" class="custom-file-input" />
              <label htmlFor="for" className="custom-file-label">
                Choose File
              </label>
            </div>
            <input type="submit" value="Submit" className="px-3 px-3 bg-blue-400" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
