import React from "react";
import "./StaticSec2.css";
import img1 from "../Assets/StaticSec2Imgs/img1.png";
import img2 from "../Assets/StaticSec2Imgs/img2.png";
import img3 from "../Assets/StaticSec2Imgs/img3.png";

function StaticSec2() {
  return (
    <div>
      <div className="StaticSec2-title">Get Marketplace Ready Images</div>
      <div className="StaticSec2-nav-bar">
        <div>
          <a className="StaticSec2-nav-bar-item1" href="#">
            Car Dealership
          </a>
        </div>
        <div>
          <a className="StaticSec2-nav-bar-item2" href="#">
            Footwear
          </a>
        </div>
        <div>
          <a className="StaticSec2-nav-bar-item3" href="#">
            Fashion
          </a>
        </div>
        <div>
          <a className="StaticSec2-nav-bar-item4" href="#">
            Furniture
          </a>
        </div>
      </div>
      <img className="StaticSec2-img1" src={img1} alt="loading"></img>
      <img className="StaticSec2-img2" src={img2} alt="loading"></img>
      <img className="StaticSec2-img3" src={img3} alt="loading"></img>
      <div className="StaticSec2-text-box1">Upload Your Image</div>
      <div className="StaticSec2-text-box2">
        Automatically Remove Background Through AI
      </div>
      <div className="StaticSec2-text-box3">
        Create{" "}
        <span className="StaticSec2-text-box3-highlighter">
          Professional Automotive Pictures
        </span>{" "}
        &amp; upload It directly to your favourite marketplace
      </div>
      <div className="StaticSec2-text-box4">Select New Background</div>
      <button className="StaticSec2-button">Try Now</button>
    </div>
  );
}

export default StaticSec2;
