import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const typedArray = new Uint8Array(fileReader.result);
        const pdfDoc = await PDFDocument.load(typedArray);

        if (!pdfDoc) {
          console.error("PDF document not loaded correctly");
          return;
        }

        const page = await pdfDoc.getPage(0);
        const text = await page.getText();
        const firstLetter = text.trim().charAt(0);

        console.log("First letter:", firstLetter);

        const formData = new FormData();
        formData.append("pdfFile", selectedFile);

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

      };

      fileReader.readAsArrayBuffer(selectedFile);
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
      <label htmlFor="pdfInput" style={{ marginRight: '10px' }}>PDF File Input:</label>
      <input id="pdfInput" type="file" accept="" onChange={handleFileChange} />
      <button onClick={handleUpload}>Translate</button>
    </div>
  );
}

export default FileUpload;
