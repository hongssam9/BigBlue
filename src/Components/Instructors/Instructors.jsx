import React from 'react';
import schedule from '../../data/schedule_response.json'
import { Avatar } from "@mui/material"
import './Instructors.css'
const Instructors = () => {
    const instructorJson = schedule[0].times[0].students[0].opening.employee.full_name
  /* const instructorJson = schedule[0].times.students.opening[0].employee */ 
    console.log(instructorJson)
    
    return (
        <div className="instructors">
        {/* {
  instructorJson.map((element, index, array) => (
      <div className="swimmers__per" key={index}>
          <Avatar className="swimmers__per--avatar" src={`https://avatars.dicebear.com/api/human.svg`} />
          {element.full_name}
      </div>
  ))
}  */} 
          {/* {instructorJson} */}
          {
            Object.keys(schedule).map((key,i,j) => (
                <div className="instructors__per" key={i}>
                    <Avatar className="swimmers__per--avatar" src={`https://avatars.dicebear.com/api/human.svg`} /> 
                    {schedule[i].times[i].students[0].opening.employee.full_name}
                    <br />
                     
                </div>
            ))
        }
        </div>
    );
};

export default Instructors;