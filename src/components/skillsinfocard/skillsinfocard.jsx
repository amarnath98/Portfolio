import React from 'react'
import './skillsinfocard.css'

const SkillsInfoCard = ({heading, skills}) => {
  return <div className='skills-info-card'>
    <h6>{heading}</h6>
    <div className="skills-info-content">
      {skills.map((item, index) => (
        <React.Fragment  key={`skill_${index}`}>
          <div className="skills-info">
            <p>{item.skill}</p>
            <p className="percentage">{item.percentage}</p>
          </div>
          
          {/* <div 
              
                    className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${item.style}`}>
                    <img src={item.src} alt="" className='w-20 mx-auto'/>
          </div> */}


          <div className="skill-progress-bg">
            <div className="skill-progress" style={{width: item.percentage}}></div>
          </div>
        </React.Fragment>
        
        
      
        ))
      }
    </div>
  </div>;
  
};

export default SkillsInfoCard