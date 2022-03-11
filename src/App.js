import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import Routes from './components/Routes.js'
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Piano from './components/Piano.js';
import Splash from './components/Splash.js';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/splash" element={<Splash />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
