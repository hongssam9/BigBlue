import React from 'react';
import "./Cart.css"

const Cart = () => {
    return (
        <div className = "cart">
            <h3>Thank you for choosing Big Blue!</h3>
            <h4>Please review your cart</h4>
            <div className="cart__list">
                <div className="cart__list--options">
                    8:00 am
                </div>
            </div>
            {/* <div className="cart__buttons">Edit</div> */}
            <div className="cart__buttons">Checkout</div>
        </div>
    );
};

export default Cart;