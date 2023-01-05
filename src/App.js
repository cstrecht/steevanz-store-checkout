import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -- React Components: --
import Home from "./pages/Home";
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import FinalStep from "./pages/FinalStep";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<FirstStep />} />
        <Route path="/informations" element={<SecondStep />} />
        <Route path="/card-details" element={<ThirdStep />} />
        <Route path="/success" element={<FinalStep />} />
      </Routes>
    </Router>
  );
}

export default App;
