import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorBound from "./components/ErrorBound";
import Cart from "./components/Cart";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="restaurants/:resId" element={<ResMenu />} />
      </Route>
      <Route path="*" element={<ErrorBound />} />
    </Routes>
  </BrowserRouter>
);
