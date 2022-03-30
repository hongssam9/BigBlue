import './App.css';
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <div className = "app__header">
       ADD WEEKLY LESSON
       <div className = "app__header--button">
          CART
        </div>
      </div>

        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
    </div>
  );
}

export default App;
