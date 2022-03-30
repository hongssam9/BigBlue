import React, { useEffect, useState } from 'react';
import dates from '../data/schedule_response.json'
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import "./Days.css"


const Days = () => {
    return (
        <div className = "days">
            <div className="days__prevnext">
                <div className="days__prevnext--change">
                    <HiArrowNarrowLeft /> Prev Week
                </div>
                <div className="days__prevnext--change" id="days__prevnext--next"> 
                    Next Week <HiArrowNarrowRight />
                </div> 
            </div>
           <div className="days__week">

            </div> 
            
        </div>
    );
};

export default Days;