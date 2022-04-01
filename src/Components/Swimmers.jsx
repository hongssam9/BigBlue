import React, { useEffect, useState} from 'react';
import studentsjson from '../data/schedule_request.json'
import "./Swimmers.css"
import { Avatar } from "@mui/material"

const Swimmers = () => {
    const studentJson = studentsjson.students
    // const [seed, setSeed] = useState('')
    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000))
    // }, []);
    
    
    return (
        <div className="swimmers">
            {/* 
        {studentJson[0].first_name}
        {studentJson[0].last_name}
        {studentJson[1].first_name}
        {studentJson[0].last_name}  
        */}

        {
            Object.keys(studentJson).map((key,i) => (
                <div className="swimmers__per" key={i}>
                    <Avatar className="swimmers__per--avatar" src={`https://avatars.dicebear.com/api/human.svg`} /> 
                    {studentJson[i].first_name} {studentJson[i].last_name}
                </div>
            ))
        }

        </div>
    );
};

export default Swimmers;