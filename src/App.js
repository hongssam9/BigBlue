import './App.css';
import { Route, Routes } from "react-router-dom"
import React, { useState } from "react";

import Cart from './Components/Cart/Cart.jsx'
import schedule from "./data/schedule_response.json"
import Times from "./Components/Time/Time.jsx"
import Instructors from './Components/Instructors/Instructors.jsx'
import Swimmers from './Components/Swimmers/Swimmers.jsx'
import Days from './Components/Days/Days.jsx'

import { TiShoppingCart } from 'react-icons/ti'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiSwim } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

function App() {

  /* To set variables globally so the variables/times can be access to other components */
  const [selectedDate, setSelectedDate] = useState(null)
  const [cartItems, setCartItems] = useState([])



  return (
    <div className="app">

      {/* Header for stlying purposes, Swimmer, Days, and Instructor tabs, Cart button */}
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
        <Route exact path="/Cart" element={<Cart cartItems={cartItems} setCart={setCartItems} />} />
        <Route path="/" element={<Days schedule={schedule} setSelectedDate={setSelectedDate}/>} />
        <Route exact path="/Instructors" element={<Instructors />} />
        <Route exact path="/Swimmers" element={<Swimmers />} /> 
      </Routes>

      <Times selectedDate={selectedDate} cartItems={cartItems} setCartItems={setCartItems} /> 
    </div>
  );
}

export default App;
