import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar logoSrc="/images/aeronova-logo.png" />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
