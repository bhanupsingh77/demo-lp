import React from "react";
import "./StaticSec1.css";
import img1 from "../Assets/StaticSec1Imgs/img1.png";

function StaticSec1() {
  return (
    <div>
      <div className="StaticSec1-bg"></div>
      <img className="StaticSec1-img1" src={img1} alt="loading"></img>
      <div className="StaticSec1-text-box-container">
        <div className="StaticSec1-text-box1">Extract The Subject</div>
        <div className="StaticSec1-text-box2">
          from removing unnecessary Image Background &amp; put the Subject on
          certain occasion you like.Free AI driven tool{" "}
        </div>
        <div className="StaticSec1-text-box3">
          Free
          <span className="StaticSec1-text-box3-highlighter">
            {" "}
            AI driven
          </span>{" "}
          tool
        </div>
      </div>
      <button className="StaticSec1-button">Try Now</button>
    </div>
  );
}

export default StaticSec1;
