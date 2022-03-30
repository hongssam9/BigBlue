import './App.css';
import React, { useState } from "react";
import Cart from './Components/Cart.jsx'
import { Route, Routes } from "react-router-dom"
import Header from './Components/Header.jsx'
import Days from './Components/Days.jsx'
function App() {

  const [dates, setDates] = useState([])

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Days />} />
      </Routes>
    </div>
  );
}

export default App;
