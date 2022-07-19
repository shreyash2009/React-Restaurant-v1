import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import AboutApp from './components/About/AboutApp';
import ReviewsApp from './components/Reviews/ReviewsApp';
import Error from './components/Error';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/about" element={<AboutApp/>}/>
        <Route exact path="/reviews" element={<ReviewsApp/>}/>
        <Route  path="/*" element={<Error/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
