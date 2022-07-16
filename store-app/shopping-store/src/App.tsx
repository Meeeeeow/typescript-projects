import React from 'react';
import './App.css';
import Header from './components/header';
import {Routes , Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './components/pages/home';
import About from './components/pages/about';
import Store from './components/pages/store';
import { ShoppingCartProvider } from './components/context/shoppingCartContext';
function App() {
  return (
    <ShoppingCartProvider>
      <Header/>
      <Container fluid className='mb-4'>
          <Routes>
            <Route path="/"  element ={<Home />} />
            <Route path="/about" element ={<About />} />
            <Route path="/store" element ={<Store />} />
          </Routes>
          
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
