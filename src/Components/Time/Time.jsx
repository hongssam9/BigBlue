import React from 'react';
import "./Time.css"

const Time = ({selectedDate, cartItems, setCartItems}) => {
    /* bring in the variables set in App.js */

    /* 
    to the variable times, access the selectedDate. Since 
    the selectedDate is set as null as the initial condition, 
    a ternary is used to check if the selectedDate exists. If it does,
    access the times. If the selectedDate.times exists, then show the
    times. If it doesn't exist, just return an empty array.
    */
    const times = selectedDate?.times ? selectedDate.times : []

    /* 
    When the time is clicked, the state is set as true, so that the user
    cannot press on the button again, preventing in duplicate items in
    the cart.
    Then it will grab the rest of the cartItems/destructure the cart items,
    then add the item in the cartItems
    */
    const addToCart = (item) =>{
        item.addedToCart = true
        setCartItems([...cartItems, item])
    }

    return (
        <div className="time">
           <ul>
               {
                   /* 
                    if SelectedDate exists, map out the time
                    for that date, if not, stop. 
                   */
                   selectedDate ? times.map((time,index) => (
                       <li 
                        key={index}
                        /* 
                        when clicked, make time null, unavailable to click. else,
                        take the item in the parameter and add the time to cart
                        */
                        
                        onClick={time.addedToCart ? null : () => addToCart(time)}
                        >
                            {time.time}
                        </li>
                   )):null
               }
           </ul>
        </div>

    );
};

export default Time;