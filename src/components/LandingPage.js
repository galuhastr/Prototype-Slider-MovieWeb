// eslint-disable-next-line
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../style/SwiperStyle.css";

// import required modules
import { EffectCards } from "swiper";


const images = [
    { image: require("../assets/movieweb-img/BG/T1.jpg") },
    { image: require("../assets/movieweb-img/PIC/P2.jpg") },
    { image: require("../assets/movieweb-img/PIC/P3.jpg") },
    { image: require("../assets/movieweb-img/PIC/P4.jpg") },
  ];

const LandingPage = () => {
    return (
        <div className="flexbox-container">
            {/* Panel Kiri */}
            <div className="flexbox-content flexleft">
                <div className="crd-content">
                    <div className="lpg-image">
                    <p></p>
                    </div>
                    
                    {/* <p>I am learning ReactJS. Today I decided to create my own blog. Header needs image with some text. And when trying to add text on image, text slides down. I need to my text position to be at center</p> */}
                </div>
                {/* <div className="crd-image border">
                    <img className="lpg-image" src={images[0].image} alt=''/>
                </div> */}
            </div>
            {/* Panel Kanan */}
            <div className="flexbox-content flexright">
              <Swiper          
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </div>
        </div>
    )
}

export default LandingPage