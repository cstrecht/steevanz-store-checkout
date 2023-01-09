import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -- React Components: --
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Informations from "./pages/Informations";
import CardDetails from "./pages/CardDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/card-details" element={<CardDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
