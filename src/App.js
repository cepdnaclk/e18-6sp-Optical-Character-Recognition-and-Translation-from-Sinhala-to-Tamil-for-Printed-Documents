import './App.css';
import React from 'react';
import FileUpload from './modules/FileUpload'
import Sita from './modules/title';
import Download from './modules/download';


function App() {
  return (
    <div>
      <Sita/>
      <FileUpload/>
      <Download></Download>
    </div>
   
    
  );
}

export default App;
