import React from 'react';
import schedule from '../../data/schedule_response.json'
import { Avatar } from "@mui/material"
import './Instructors.css'
const Instructors = () => {
    return (
        <div className="instructors">
            {
                Object.keys(schedule).map((i) => (
                    <div className="instructors__per" key={i}>
                        <Avatar className="instructors__per--avatar" />
                        {schedule[i].times[i].students[0].opening.employee.full_name}
                    </div>
                ))
            }

        </div>
    );
};

export default Instructors;