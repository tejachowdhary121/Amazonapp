import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavbarComp from './Components/NavbarComp';
import CarouselPage from './Components/CarouselPage';
import Fresh from './Components/Fresh';
import Fresh1 from './Components/Fresh1';
import PrimeVideo from './Components/PrimeVideo';
import PrimeVideo1 from './Components/PrimeVideo1';
import Electronics from './Components/Electronics';
import Electronics1 from './Components/Electronics1';
import Footer from './Components/Footer';
import MiniTv from './Components/MiniTv';
import Notfound from './Components/Notfound';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <CarouselPage />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/" element={<Fresh/>} />
        <Route path="/fresh1" element={<Fresh1 />} />
        <Route exact path="/" element={<PrimeVideo/>} />
        <Route path="/primevideo1" element={<PrimeVideo1 />} />
        <Route exact path="/" element={<Electronics/>} />
        <Route path="/electronics1" element={<Electronics1 />} />
        <Route path="/fresh" element={<Fresh />}></Route>
        <Route path="/primevideo" element={<PrimeVideo />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/minitv" element={<MiniTv />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;