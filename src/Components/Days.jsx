import React, { useEffect, useState } from 'react';
import schedule from '../data/schedule_response.json'
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import "./Days.css"

const Days = () => {

    return (
        <div className="days">
            <div className="days__prevnext">
                <div className="days__prevnext--change">
                    <HiArrowNarrowLeft /> Prev Week
                </div>
                <div className="days__prevnext--change" id="days__prevnext--next">
                    Next Week <HiArrowNarrowRight />
                </div>
            </div>
            <div className="days__week">
                {/* <div className="days__week--day">WED 02/10</div>
                <div className="days__week--day">THU 02/11</div>
                <div className="days__week--day">FRI 02/12</div>
                <div className="days__week--day">SAT 02/13</div>
                <div className="days__week--day">SUN 02/14</div>
                <div className="days__week--day">MON 02/15</div>
                <div className="days__week--day">TUE 02/16</div> */}

                {schedule.map(date => {
                    return (
                        <div key={date.times} className="days__week--day">
                            <p>{date.date}</p>
                        </div>

                    )

                })}
            </div>

        </div>
    );
};

export default Days;