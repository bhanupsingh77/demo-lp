import React from "react";
import "./ProductShowcase.css";
import img1 from "../Assets/ProductShowcaseImgs/img1.png";
import img2 from "../Assets/ProductShowcaseImgs/img2.png";

function ProductShowcase() {
  return (
    <div>
      <div className="ProductShowcase-bg"></div>
      <div className="ProductShowcase-gradient"></div>
      <div className="ProductShowcase-title">
        We create product images that{" "}
        <span className="ProductShowcase-title-highlighter">SELL</span>
      </div>
      <img className="ProductShowcase-img1" src={img1} alt="loading"></img>
      <div className="ProductShowcase-Container-bg"></div>
      <img className="ProductShowcase-img2" src={img2} alt="loading"></img>
      <div className="ProductShowcase-bar1"></div>
      <div className="ProductShowcase-bar2"></div>
      <div className="ProductShowcase-text-box1">
        Conversion Rate %with unnecessary background
      </div>
      <div className="ProductShowcase-text-box2">
        Conversion Rate %with solid background
      </div>
    </div>
  );
}

export default ProductShowcase;
