import React from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import "./Days.css"

const Days = ({schedule, setSelectedDate}) => {
    /* First destructure, bringing in schedule and setSelectedDate */

    /* handling the click function where when useState setSelectedDate is called, the variable date is taken in */
    const handleClick= (date) =>{
        setSelectedDate(date)
    }
    return (
        <div className="days">
            {/* Styling purposes */}
            <div className="days__prevnext">
                <p>
                    <HiArrowNarrowLeft /> Prev Week
                </p>
                <p className="second-p">
                    Next Week <HiArrowNarrowRight />
                </p>
            </div>

            
            <div className="days__week">
                <ul>
                    {schedule.map((day, i) => (
                        <li key={i} onClick={() => handleClick(day)}>{day.date}</li>
                    ))}    
                </ul>    
            </div>      
        </div>
    );
};

export default Days;