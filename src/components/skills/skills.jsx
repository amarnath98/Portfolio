import React, { useState } from 'react'
import Cards from '../skill-cards/cards';
import SkillsInfoCard from '../skillsinfocard/skillsinfocard';
import "./skills.css"
import { skillsData } from '../../utils/data'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container' id='skills'>
      <h5>Techincal Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
              {skillsData.map((item) => (
                <Cards key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title === item.title} onClick={ () => {handleSelectedSkill(item)} }/>
              ))
            }
            </div>
            
            <div className="skills-info">
              <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
            </div>
            
        </div>
    </section>
  )
}

export default Skills