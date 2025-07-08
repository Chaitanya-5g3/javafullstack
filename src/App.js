// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MobileRecharge from "./components/mobileRecharge";
import ElectricityBill from "./components/electricity";
import DTHRecharge from "./components/DTHRecharge";
import Fastag from "./components/FastagRecharge";
import LoanEMI from "./components/loan";
import Insurance from "./components/insurance";
import LoginPage from "./components/loginpage";
import MobileLogin from "./components/mobilelogin";
import AllProducts from "./components/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mobile-login" element={<MobileLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mobile-recharge" element={<MobileRecharge />} />
        <Route path="/electricity" element={<ElectricityBill />} />npm stat
        <Route path="/dth" element={<DTHRecharge />} />
        <Route path="/fastag" element={<Fastag />} />
        <Route path="/loan" element={<LoanEMI />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
