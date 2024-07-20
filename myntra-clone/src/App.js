import React from "react";
import "./App.css";
import "./Customization/Styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import Home from "./Customization/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Ioa from "./Components/Ioa";
import Subtotal from "./Components/Subtotal";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
          <Route
            path="/posts"
            element={
              <>
                <Header />
                <Ioa />
              </>
            }
          />
          <Route
            path="/customization"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
