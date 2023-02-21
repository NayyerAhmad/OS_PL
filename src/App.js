import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Programming from "./pages/programLanguage";
import OperatingSys from "./pages/operatingSys";
import Compatibility from "./pages/compatibility";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/programming_languages" element={<Programming/>} />
        <Route path="/operating_systems" element={<OperatingSys/>} />
        <Route path="/compatibility" element={<Compatibility/>} />
      </Routes>
    </Router>
  );
}
export default App;