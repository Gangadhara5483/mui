import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Navbar from "./components/Navbar";
import AdminTable from "./components/AdminTable";
function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <DashBoard />
        <Routes>
          <Route path="/" element={<h1>Hello Home page</h1>} />
          <Route path="/menu" element={<h1>Menu</h1>} />
          <Route path="/DashBoard" element={<h1>DashBoard</h1>} />
          <Route path="/Shareholder" element={<h1>Shareholder</h1>} />
          <Route path="/Admin" element={<AdminTable />} />
          <Route path="/Companies" element={<h1>Companies</h1>} />
          <Route path="Request" element={<h1>Request</h1>} />
          <Route path="*" element={<h1>Hello</h1>} />
        </Routes>
      </div>
    </div>
    //  <>
    //   <Routes>

    //         <Route path="/Menu" element={<Home />} />
    //         <Route path="/Admin" element={<Home />} />

    //      </Routes>
    //  <Home />
    //  </>
  );
}

export default App;
