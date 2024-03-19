import React, {useRef} from 'react'
import './workexperience.css'
import {experience} from '../../utils/data'
import WorkExperienceCard from '../workexperiencecard/workexperiencecard';
import Slider from 'react-slick';


const WorkExperience = ({onReadMore}) => {

    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
      };

    const slideLeft = () => {
        slideRef.current.slickPrev()
    }

    const slideRight = () => {
        slideRef.current.slickNext()
    }

  return (
    <section id='experience'>
        <div className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">

                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">{'>'}</span>
                </div>
                
                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">{'<'}</span>
                </div>

                
                <Slider ref={slideRef} {...settings}>
                    { experience.map((items) => (
                        // <div className="setwh">
                            <WorkExperienceCard data ={items} key={items.company} onReadMore={onReadMore} />
                            // </div>
                        ) )
                    }
               </Slider>
               
                
            </div>
        </div>
    </section>
  )
}

export default WorkExperience