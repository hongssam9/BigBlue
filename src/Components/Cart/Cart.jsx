import React from 'react';
import "./Cart.css"

const Cart = ({cartItems, setCartItems}) => {

    /* 
        when pressed, set addedToCart to false, taken from Time.jsx component
        Then to get rid of the item out of the cart, go into the setCartItems,
        then filter out the item from the cart. So, it returns the cartItem
        that does not equal to item
    */
    const removeFromCart = (item) =>{
        item.addedToCart = false
        setCartItems(prevCartItems => {
            return prevCartItems.filter(cartItem => cartItem !== item)
        })

    }
    return (
        <div className="cart">
            <h3>Thank you for choosing Big Blue!</h3>
            <h4>Please review your cart</h4>
            
            <div className="cart__list">
                {/* <div className="cart__empty--container">
                    {cartItems.length === 0 && <div className="cart__empty">Cart is Empty</div>}
                     
                </div>
                 */}
  <h1>Cart {cartItems.length}</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} onClick={() => removeFromCart(item)}>
            {item.time}
          </li>
        ))}
      </ul>
            </div>
            <button className="cart__buttons">Checkout</button>
        </div>
    );
};

export default Cart;