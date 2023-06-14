import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFDocument } from 'pdf-lib';
// import './FileUpload.css'

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

        const page = await pdfDoc.getPage(0);
        const text = await page.getText();
        const firstLetter = text.trim().charAt(0);

        console.log('First letter:', firstLetter);
      };

      fileReader.readAsArrayBuffer(selectedFile);
    }
  };

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
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Translate</button>
    </div>
  );
}

export default FileUpload;
