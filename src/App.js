import React, { useState } from 'react';
import Header from './components/header/header';
import SocialLinks from './components/sociallinks/sociallinks';
import "./App.css"
import Skills from './components/skills/skills';
import WorkExperience from './components/workexperience/workexperience';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import PopUp from './components/popup/popup';
import Footer from './components/footer/footer';

const App = () => {
    
    const [popupData, setPopupData] = useState(null);

    const handleReadMore = (data) => {
      setPopupData(data);
    };
  
    const handleClosePopup = () => {
      setPopupData(null);
    };
 return (
  <>
  <Header /> 
 <div className='container'>
  <Home />
  {/* <SocialLinks /> */}
  <Skills />
  <WorkExperience onReadMore={handleReadMore} />
  <PopUp isOpen={popupData !== null} onClose={handleClosePopup} data={popupData} />
  <Contact />
  <Footer />

 </div>
 </>
 )
}

export default App