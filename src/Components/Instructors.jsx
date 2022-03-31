import React from 'react';
import schedule from '../data/schedule_response.json'

const Instructors = () => {
    const instructorJson = schedule[0].times[0].students[0].opening.employee.full_name
    console.log(instructorJson)
    return (
        <div className="instructors">
            inst
          {instructorJson}
        </div>
    );
};

export default Instructors;