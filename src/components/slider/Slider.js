import {useState} from 'react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"; 
import {sliderData} from "./Slide_data"
import "./Slider.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] =useState(0);
  return (
    <div className="slider">
        <AiOutlineArrowLeft className="arrow-prev" />
        <AiOutlineArrowRight className="arrow-next" />

        {sliderData.map((slide,index) => {
            return(
                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <div>   
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.header}</h2>
                            </div>
                        </div>
                    )}
                </div>    
            )
        })}
        
    </div>
  )
};

export default Slider;
