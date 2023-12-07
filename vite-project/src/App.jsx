import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null);
  const [files,setFiles] = useState(null);;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setFiles(response.data.data)
      const ImgData = `data:${response.data.imgdata.mimetype};base64,${response.data.imgdata.binary}`
      setFiles(ImgData)
      console.log('Response:', response.data.imgdata.binary);

      // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
     
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={files} alt="" width={100}/>
    </div>
  );
};

export default App;
