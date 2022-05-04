import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Bio from './pages/bio';
import Contact from './pages/contact';
import Home from './pages/home';
import Music from './pages/music';
import Radio from './pages/radio';
import Shop from './pages/shop';
import Tour from './pages/tour';
import Videos from './pages/videos';

function App() {
  return (
    <div className="App">
      <Container fluid style={{ minHeight: 'calc(100vh - 5em)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
