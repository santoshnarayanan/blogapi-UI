import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);
