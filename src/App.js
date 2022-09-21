import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productos from "./pages/productos";
import Promociones from "./pages/promociones";
import Envios from "./pages/envios";
import Contacto from "./pages/contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/productos" component={Productos} />
        <Route path="/promociones" component={Promociones} />
        <Route path="/envios" component={Envios} />
        <Route path="/contacto" component={Contacto} />
      </Routes>
    </Router>
  );
}

export default App;
