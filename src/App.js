import './App.css';
import React, { useState } from "react";
import Cart from './Components/Cart.jsx'
import { Route, Routes } from "react-router-dom"

import Days from './Components/Days.jsx'
import Time from './Components/Time.jsx'
import Instructors from './Components/Instructors.jsx'
import Swimmers from './Components/Swimmers.jsx'
import { TiShoppingCart } from 'react-icons/ti'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiSwim } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { Stack } from 'react-bootstrap'
function App() {

  const [dates, setDates] = useState([])

  return (
    <div className="app">
      <div className="app__header">
    
        <div className="header__title">
          <div className="header__title--title" id="title">ADD WEEKLY LESSON </div>
          <a href="/Cart"><div className="header__title--title" id="header__cart">
            <TiShoppingCart /> CART
          </div>
          </a>
        </div>
        <div className="header__sdi">
          <a href="/Swimmers"><div className="header__sdi--options">Swimmers<br /> <BiSwim /> <div id="header__sdi--circle">2</div></div></a>
          <a href="/"><div className="header__sdi--options">Days <br /> <AiOutlineCalendar /> <span>Select</span></div></a>
          <a href="/Instructors"><div className="header__sdi--options">Instructors<br /> <BsPerson /> <span>Select</span></div></a>
        </div>
 
      </div>

      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route path="/" element={<Days />} />
        <Route exact path="/Time" element={<Time />} />
        <Route exact path="/Instructors" element={<Instructors />} />
        <Route exact path="/Swimmers" element={<Swimmers />} />
      </Routes>
    </div>
  );
}

export default App;
