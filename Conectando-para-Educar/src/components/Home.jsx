import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavigationBar from '../components/Utilities/NavigationBar'
import Body from './Body';
import PictureSlide from './Utilities/PictureSlide';

export default function Home () {
    <div>
        <BrowserRouter>
            <NavigationBar />
            <PictureSlide />
            <Body />
        </BrowserRouter>
    </div>
}

{/* <BrowserRouter>
        <NavigattionBar />
        <PictureSlide />
        <Body />
      </BrowserRouter> */}