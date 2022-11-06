import React from "react";
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
//import {NavLink, Route, Routes, useSearchparams} from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <About />
      <PrivacyPolicy />
    </>
  );
}
export default App;
