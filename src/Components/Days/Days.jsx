import React, { useContext } from 'react';
import { scheduleContext } from '../../App.js'
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import "./Days.css"
import Time from "../Time/Time"

const Days = () => {
    const schedule = useContext(scheduleContext)
    return (
        <div className="days">
            <div className="days__prevnext">
                <p>
                    <HiArrowNarrowLeft /> Prev Week
                </p>
                <p className="second-p">
                    Next Week <HiArrowNarrowRight />
                </p>
            </div>
            <div className="days__week">
                {
                    schedule.map((sche, index) =>
                        <div className="sche" key={index}>
                            <Link to="">{sche.date}</Link>
                        </div>)
                }
            </div>
            <Time />
        </div>
    );
};

export default Days;