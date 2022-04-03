import React, { useEffect, useState } from 'react';
import studentsjson from '../../data/schedule_request.json'
import "./Swimmers.css"
import { Avatar } from "@mui/material"

const Swimmers = () => {
    const studentJson = studentsjson.students
    return (
        <div className="swimmers">
            {
                studentJson.map((element, index, array) => (
                    <div className="swimmers__per" key={index}>
                        <Avatar className="swimmers__per--avatar" src={`https://avatars.dicebear.com/api/human.svg`} />
                        {element.first_name} {element.last_name}
                    </div>
                ))
            }
        </div>
    );
};

export default Swimmers;