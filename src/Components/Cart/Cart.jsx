import React from 'react';
import "./Cart.css"

const testTimes = ["8:00:00", "10:00:00", "12:00:00"]

const Cart = (props) => {
    const { cartItems } = props
    return (
        <div className="cart">
            <h3>Thank you for choosing Big Blue!</h3>
            <h4>Please review your cart</h4>
            <div className="cart__list">
                <div className="cart__empty--container">
                    {cartItems.length === 0 && <div className="cart__empty">Cart is Empty</div>}
                </div>
            </div>
            {/* <div className="cart__buttons">Edit</div> */}
            <button className="cart__buttons">Checkout</button>
        </div>
    );
};

export default Cart;