import React, {useState} from 'react'
import "./header.css"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            {/* <img className='setimage' src={"/assets/images/mylogo.svg"} alt='Porolio Logo' /> */}
          </div>
          {/* <div className='h-20 px-4'>
        <div>
            <h1 className='signature'>Amarnath Pamidi</h1>
        </div>
        </div> */}

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home' aria-label="Home">home</a>
              </li>
              {/* <li>
                <a href='#features'>features</a>
              </li> */}
              <li>
                <a href='#skills'>skills</a>
              </li>
              <li>
                <a href='#experience'>experience</a>
              </li>
              <li>
                <a href='/assets/files/AmarnathPamidi_Resume.pdf' download={true} 
                    target='_blank'
                    rel='noreferrer'>resume</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li> */}
              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              {/* <li>
                <button className='home-btn'>HIRE ME</button>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>

    </>


  )
}

export default Header