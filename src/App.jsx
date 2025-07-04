import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Aerodromos } from "./pages/Aerodromos";
import { Helipuertos } from "./pages/Helipuertos";
import { About } from "./pages/About";
import { Vant } from "./pages/Vant";
import "./styles/App.css";

import { Consultoria } from "./pages/Consultoria";
import { Cartografia } from "./pages/Cartografia";

function App() {
  return (
    <div className="app-container">
      <Navbar logoSrc="/images/aeronova-logo.png" />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aerodromos" element={<Aerodromos />} />
          <Route path="/helipuertos" element={<Helipuertos />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/vant" element={<Vant />} />
       
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/cartografia" element={<Cartografia />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
