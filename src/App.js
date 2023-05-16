import React from "react";
import { Routes, Route } from "react-router-dom";
import Drinks from "./components/Drinks";
import Home from "./components/Home";
import About from "./components/About";
import DrinkDetail from "./components/DrinkDetail";

import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Drinks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="drink/:id" element={<DrinkDetail />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
