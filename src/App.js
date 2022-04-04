import './App.css';
import { Route, Routes } from "react-router-dom"
import React, { useState } from "react";
import { Link } from "react-router-dom"
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
          <Link to="/Cart"><div className="header__title--title" id="header__cart">
            <TiShoppingCart /> CART
          </div>
          </Link>
        </div>
        <div className="header__sdi">
          <Link to="/Swimmers"><div className="header__sdi--options">Swimmers<br /> <BiSwim /> <div id="header__sdi--circle">2</div></div></Link>
          <Link to="/"><div className="header__sdi--options">Days <br /> <AiOutlineCalendar /> <span>Select</span></div></Link>
          <Link to="/Instructors"><div className="header__sdi--options">Instructors<br /> <BsPerson /> <span>Select</span></div></Link>
        </div>
      </div> 

      <Routes>
        <Route exact path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        {/* 
          set 2 elements inside home page since putting the Times component anywhere else will
          also appear in the instructors/swimmers tab or using a links would refresh the page
          and have the items in the cart disappear since this is only a frontend program
        */}
        <Route path="/" element={<><Days schedule={schedule} setSelectedDate={setSelectedDate}/> <Times selectedDate={selectedDate} cartItems={cartItems} setCartItems={setCartItems}/> </>} />
        {/* <Route path="/Times" element={<Times selectedDate={selectedDate} cartItems={cartItems} setCartItems={setCartItems}/>} /> */}
        <Route exact path="/Instructors" element={<Instructors />} />
        <Route exact path="/Swimmers" element={<Swimmers />} /> 
      </Routes>

    </div>
  );
}

export default App;

/* 
  1) Make dates show up
  2) Make one time show up for date
  3) Make times show up for date
  4) Map map map...
*/