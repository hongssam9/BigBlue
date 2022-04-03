import React, { useContext, useState } from 'react';
import { scheduleContext } from '../../App.js'
import { Link } from 'react-router-dom';
import "./Time.css"

const timesArray = []

const Time = () => {
    const [cartItems, setCartItems] = useState([])
    const schedule = useContext(scheduleContext)
    // console.log(schedule)

    const handleClick = () => {
       
    }


    return (
        <div className="time">
            {
                schedule.map((times, index) =>
                    <button className="time__buttons" key={index} onClick={handleClick()}>
                            {times.times[0].time} 
                    </button>)
            }
        </div>

    );
};

export default Time;