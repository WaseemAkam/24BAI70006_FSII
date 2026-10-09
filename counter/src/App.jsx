import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {Routes, Route } from "react-router-dom";

import home from "./components/Home.jsx";
import contact from "./components/Contact.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Routes>
      <Route path="/" element={<home />}></Route>
      <Route path="/contact" element={<contact />}></Route>

    </Routes>
  </div>
);