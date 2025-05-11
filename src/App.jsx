import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PetStoreNavbar from './components/PetStoreNavbar';
import Home from './pages/Home';
import Products from './pages/Pet';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './pages/Register';


function App() {
  return (
    <>
      <PetStoreNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
