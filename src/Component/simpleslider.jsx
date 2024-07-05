import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<img src="images/triangle.png" alt="next-arrow" />,
    prevArrow:<img src="images/triangle.png" alt="prev-arrow" />
  };
  return (
    <Slider {...settings}>
     <div>
      <div className="slider-flex">
      <div className="home-main-col-1">
                    <h1>Dancing School</h1>
                    <h6>Prestigious dance school</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button type="button">Detail</button>
 
                </div>
                <div className="home-main-col-2">
                    <img src="images/home-main.png" alt="slider-1"/>
                </div>
      </div>
      </div>
      <div>
      <div className="slider-flex">
      <div className="home-main-col-1">
                    <h1>Dancing School</h1>
                    <h6>Prestigious dance school</h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button type="button">Detail</button>
 
                </div>
                <div className="home-main-col-2">
                    <img src="images/home-main.png" alt="slider-2"/>
                </div>
      </div>
      </div>
       
    </Slider>
  );
}

export default  SimpleSlider;