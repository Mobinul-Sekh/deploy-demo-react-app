import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
