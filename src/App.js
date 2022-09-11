import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import About from "./components/Page/About/About";
import ProductsList from "./components/Page/Products/ProductsList";
import ProductsDetails from "./components/Page/Products/ProductsDetails" 
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<ProductsList />} path="/" />
        <Route element={<ProductsDetails />} path="/products/:id" />
        <Route element={<About />} path="/about" />
      </Routes>
    </div>
  );
}

export default App;
