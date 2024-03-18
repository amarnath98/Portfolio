import React from 'react'
import './cards.css'


const Cards = ({isActive, iconUrl, title, onClick}) => {
  return (
    <div className={`skills-card ${isActive?"active":""}`} onClick={() => onClick()}>
      <div className="skills-icon">
          <img src={iconUrl} alt={title}/>
      </div>

      <span>{title}</span>
   </div>
  )
}

export default Cards