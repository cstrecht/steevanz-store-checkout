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
        <Route path="/page1" element={<FirstStep />} />
        <Route path="/page2" element={<SecondStep />} />
        <Route path="/page3" element={<ThirdStep />} />
        <Route path="/page4" element={<FinalStep />} />
      </Routes>
    </Router>
  );
}

export default App;
