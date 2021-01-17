import React from "react";
import ImageSlider from "react-image-comparison-slider";
import "./ImageDrager.css";
import bg1 from "../Assets/ImageDragerImgs/bg1.png";
import bg2 from "../Assets/ImageDragerImgs/bg2.png";

function ImageDrager() {
  return (
    <div className="drager-wrapper">
      <div className="drager-title">Make Your Subject Stand Out!</div>
      <div className="drager-nav-bar">
        <div>
          <a className="drager-nav-bar-item1" href="#">
            Models
          </a>
        </div>
        <div>
          <a className="drager-nav-bar-item2" href="#">
            Watches
          </a>
        </div>
        <div>
          <a className="drager-nav-bar-item3" href="#">
            Grocery
          </a>
        </div>
        <div>
          <a className="drager-nav-bar-item4" href="#">
            Footwear
          </a>
        </div>
        <div>
          <a className="drager-nav-bar-item5" href="#">
            Car
          </a>
        </div>
      </div>
      <div className="drager-img-slider">
        <ImageSlider
          image1={bg1}
          image2={bg2}
          sliderColor={"#FFFFFF"}
          handleBackgroundColor={"#C4C4C4"}
          handleColor={"#444444"}
          onSlide={() => {
            console.log("sliding");
          }}
        />
      </div>
    </div>
  );
}

export default ImageDrager;
