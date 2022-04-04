import React from 'react';
import "./Cart.css"

const Cart = ({ cartItems, setCartItems }) => {

    /* 
        when pressed, set addedToCart to false, taken from Time.jsx component
        Then to get rid of the item out of the cart, go into the setCartItems,
        then filter out the item from the cart. So, it returns the cartItem
        that does not equal to item
    */
    const removeFromCart = (item) => {
        item.addedToCart = false
        setCartItems(prevCartItems => {
            return prevCartItems.filter(cartItem => cartItem !== item)
        })

    }
    return (
        <div className="cart">
            {/* {console.log(cartItems[0].students[0].start_date)}  */}
            {/* {console.log(cartItems[0].students[0].opening.employee.partial_full_name)} */}
            <div className="cart__title">
                <p>Shopping Cart <span>{cartItems.length} item(s)</span></p>
               
            </div>

            <div className="cart__list">
                <div className="cart__empty--container">
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                </div>

                <ul>
                    {cartItems.map((item, i) => (
                        <li key={i} >
                            <p class="cart__items">
                                {item.students[0].start_date} --- {item.time} - - - - - Instructor: {item.students[0].opening.employee.partial_full_name}
                                <button class="cart__items" id="cart__items--button" onClick={() => removeFromCart(item)}> Delete </button>
                            </p>

                        </li>
                    ))}
                </ul>
            </div>
            <button className="cart__checkout">Checkout</button>
        </div>
    );
};

export default Cart;

/* 

*/