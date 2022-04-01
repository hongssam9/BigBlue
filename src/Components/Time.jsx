import React from 'react';
import schedule from '../data/schedule_response.json'
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import "./Time.css"


const Time = () => {

    const timeJson = schedule[0]
    console.log(timeJson)
    return (
        <div>
            <div className="days__prevnext">
                <div className="days__prevnext--change">
                    <HiArrowNarrowLeft /> Prev Week
                </div>
                <div className="days__prevnext--change" id="days__prevnext--next">
                    Next Week <HiArrowNarrowRight />
                </div>
            </div>
            <div className="days__week">
                {schedule.map(date => {
                    return (
                        <div key={date.times} className="days__week--day">

                            <Link to="/Time">
                                <p>{date.date}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
              
        </div>
    );
};

export default Time;