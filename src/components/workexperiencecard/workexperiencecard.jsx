import React, { useState } from 'react';
import './workexperiencecard.css'

const WorkExperienceCard = ({ data, onReadMore }) => {

  const handleReadMore = () => {
    onReadMore(data);
  };

  return (
    <div className="experience-card">
      <h6>{data.title}</h6>
      <div className="work-duration">{data.date}</div>
      <ul>
        {data.responsibilities.slice(0, 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {data.responsibilities.length > 3 && <li>...</li>}
      </ul>

      <div className="read-more-container">
        <button className="read-more" onClick={handleReadMore}>
          {data.responsibilities.length > 3 && 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceCard;  
  
//   return (
//     <div className='experience-card'>
//         <h6>{data.title}</h6>
//         <div className="work-duration">
//             {data.date}
//         </div>

//         <ul>
//             {data.responsibilities.map((item) => (
//                 <li key={item}>{item}</li>
//             ) )}
//         </ul>
//     </div>
//   )
// }

// export default WorkExperienceCard