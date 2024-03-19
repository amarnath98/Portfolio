import React from "react"
import "./home.css"
import { Typewriter } from "react-simple-typewriter"
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            {/* <h3>WELCOME TO MY WORLD</h3> */}
            <h1>
              Hi, I’m <span>Amarnath Pamidi</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Software Engineer.", " Full Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>
            {/* A skilled and versatile software professional, I bring a wealth of experience in designing, developing, and deploying scalable and high-performance applications. With expertise in a diverse range of technologies, including C#, .NET Core, React, Angular, SQL Server, and cloud platforms like Microsoft Azure and AWS, I excel in crafting robust and efficient solutions that meet business requirements. */}
            As a seasoned software professional with a diverse skill set encompassing C#, .NET Core, React, Angular, SQL Server, and cloud platforms like Microsoft Azure and AWS, I excel in architecting and executing scalable, high-performance applications that meet intricate business demands.            </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME</h4>
                <div className='button'>
                <a href="https://www.linkedin.com/in/amarnath-pamidi/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                  <a href="https://github.com/amarnath98/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                      <i className='fab fa-github'></i>
                  </button>
                  </a>
                  <a href="./assets/files/AmarnathPamidi_Resume.pdf" target="_blank" aria-label="Resume" download={true} rel="noopener noreferrer">
                  <button className='btn_shadow' aria-label="Resume">
                  <BsFillPersonLinesFill size={15}/> Resume
                      {/* <i className='fab fa-github'></i> */}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src="./assets/gifs/dribble_loading.gif" alt='Main pic' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home