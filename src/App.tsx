import React from 'react';
import CreateAccount from "./pages/CreateAccount"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
  );
}

export default App;
