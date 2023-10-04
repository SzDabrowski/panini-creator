import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./views/welcome_screen/WelcomeScreen";
import PaniniCreator from "./views/panini_creator/PaniniCreator";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="panini" element={<PaniniCreator />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
