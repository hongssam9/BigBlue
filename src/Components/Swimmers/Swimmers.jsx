import React from 'react';
import studentsjson from '../../data/schedule_request.json'
import "./Swimmers.css"
import { Avatar } from "@mui/material"

const Swimmers = () => {
    const studentJson = studentsjson.students
    return (
        <div className="swimmers">
            {
                studentJson.map((swimmer, i) => (
                    <div className="swimmers__per" key={i}>
                        <Avatar className="swimmers__per--avatar" />
                        {swimmer.first_name} {swimmer.last_name}
                    </div>
                ))
            }
        </div>
    );
};

export default Swimmers;