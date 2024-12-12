import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './styles/components/footer.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
