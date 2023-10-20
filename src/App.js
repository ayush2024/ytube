import React from 'react'
import { BrowserRouter,Route, Routes, createBrowserRouter } from "react-router-dom";
import Home from './components/Home/Home'

import YouTubeVideoDetails from './components/Details/YouTubeVideoDetails'
import Show from './components/Show/Show';

const App = () => {
  return (
    <>
      {/* <Home /> */}
      
      {/* <YouTubeVideoDetails /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        
        <Route path="/show" element={<Show />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App