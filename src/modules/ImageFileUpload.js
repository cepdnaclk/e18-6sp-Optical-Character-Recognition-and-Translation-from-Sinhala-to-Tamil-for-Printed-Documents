import React, { useState } from 'react';
import axios from 'axios';



function ImageFileUpload() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const uploadedImage = fileReader.result;
        // Perform operations with the image data
        // console.log('Image data:', imageData);
        try {

            const response = await axios.post(`http://localhost:4000/upload`,uploadedImage);
    
          if (response.ok) {
            console.log("File uploaded successfully");
          } else {
            console.error("File upload failed");
          }
          } catch (error) {
            console.error("Network error:", error);
          }
          
      };

      
      
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    maxWidth: '600px',
    margin: '20px auto'
  };

  return (
    <div style={containerStyle}>
        <label htmlFor="imgInput" style={{ marginRight: '10px' }}>Image File Input:</label>
      <input id ="imgInput" type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Translate</button>
    </div>
  );
}

export default ImageFileUpload;
