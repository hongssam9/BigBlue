import React from 'react';
import studentsjson from '../data/schedule_request.json'

const Swimmers = () => {
    const studentJson = studentsjson.students

    return (
        <div>
            {/* 
        {studentJson[0].first_name}
        {studentJson[0].last_name}
        {studentJson[1].first_name}
        {studentJson[0].last_name}  
        */}

        {
            Object.keys(studentJson).map((key,i) => (
                <p key={i}>
                    {studentJson[i].first_name} {studentJson[i].last_name}
                </p>
            ))
        }

        </div>
    );
};

export default Swimmers;