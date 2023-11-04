import React, { useState } from 'react';
import axios from "axios";


// import './FileUpload.css'

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    

      const formData = new FormData();
      formData.append("uploadedPdf", selectedFile);

      try {

        const response = await axios.post(`http://localhost:4000/api/upload`, formData);

      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("File upload failed");
      }
      } catch (error) {
        console.error("Network error:", error);
      }
      
      
    }
  

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    maxWidth: '600px', // Set the maximum width of the div
    margin: '0 auto' // Center the div horizontally within its parent container
  };
  

  return (
    <div style={containerStyle}>
      <input type="file" accept=".pdf" onChange={handleFileChange} required/>
      <button onClick={handleUpload}>Translate</button>
    </div>
  );
}

export default FileUpload;
