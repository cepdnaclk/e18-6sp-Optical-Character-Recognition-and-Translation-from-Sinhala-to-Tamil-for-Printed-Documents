import React from 'react'
import './download.css'
import fileDownload from 'js-file-download'
import axios from 'axios';


export default function Download() {

  const handleFileDownload = async () => {
    try {
      axios.get('http://localhost:4000/download', {
        responseType: 'blob', // Important for binary data like files
      }).then((res)=>{
        fileDownload(res.data)
      });

     
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  return (
    <div className='download'>
       <button onClick={handleFileDownload}>Download</button>
    </div>
  )
}
