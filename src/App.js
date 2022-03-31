import './App.css';
import React, { useState } from "react";
import Cart from './Components/Cart.jsx'
import { Route, Routes } from "react-router-dom"
import Header from './Components/Header.jsx'
import Days from './Components/Days.jsx'
import Time from './Components/Time.jsx'
import Instructors from './Components/Instructors.jsx'
import Swimmers from './Components/Swimmers.jsx'


function App() {

  const [dates, setDates] = useState([])

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route path="/" element={<Days />} />
        <Route  exact path="/Time" element={<Time />} />
        <Route  exact path ="/Instructors" element={<Instructors />} />
        <Route  exact path="/Swimmers" element={<Swimmers />} />
      </Routes>
    </div>
  );
}

export default App;
