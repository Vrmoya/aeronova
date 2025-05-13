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
import { LadLadH } from "./pages/Lad-LadH";

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
          <Route path="/ladladH" element={<LadLadH />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
