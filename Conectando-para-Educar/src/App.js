import './App.css';
// import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavigattionBar from './components/NavigattionBar';
import PictureSlide from './components/PictureSlide';
import Body from './components/Body';


function App() {
  return (
    <div  className="App">
      
      <BrowserRouter>
        <NavigattionBar />
        <PictureSlide />
        <Body />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
