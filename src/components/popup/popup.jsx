import React from 'react'
import './popup.css'

const PopUp = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
  
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <div className="popup-card">
            <h6>{data.title}</h6>
            <div className="popup-work-duration">{data.date}</div>
            <ul>
              {data.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default PopUp