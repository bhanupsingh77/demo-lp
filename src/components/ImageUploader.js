import React, { useRef } from "react";
import "./ImageUploader.css";
import img1 from "../Assets/ImageUploaderImgs/img1.svg";
import img2 from "../Assets/ImageUploaderImgs/img2.png";
import img3 from "../Assets/ImageUploaderImgs/img3.png";
import img4 from "../Assets/ImageUploaderImgs/img4.png";
import img5 from "../Assets/ImageUploaderImgs/img5.svg";

function ImageUploader() {
  const backgroundRef = useRef("");
  function changeBackground() {
    backgroundRef.current.src = img5;
  }
  function changeBackgroundBack() {
    backgroundRef.current.src = img1;
  }

  return (
    <div>
      <div className="ImageUploader-img1-container">
        <img
          ref={backgroundRef}
          className="ImageUploader-img1"
          src={img1}
          alt="loading"
        />
      </div>
      <div className="ImageUploader-title">
        {" "}
        Remove Background{" "}
        <span className="ImageUploader-title-small-font">
          in a{" "}
          <span className="ImageUploader-title-highlighter"> Single Click</span>{" "}
          using AI
        </span>
      </div>
      <img className="ImageUploader-img2" src={img2} alt="loading"></img>
      <div
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackgroundBack}
        className="ImageUploader-input-box"
      ></div>
      <div
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackgroundBack}
        className="ImageUploader-text-box1"
      >
        Drag Image Here
      </div>
      <img
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackgroundBack}
        className="ImageUploader-img3"
        src={img3}
        alt="loading"
      ></img>
      <img
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackgroundBack}
        className="ImageUploader-img4"
        src={img4}
        alt="loading"
      ></img>
      <input
        className="ImageUploader-input"
        type="file"
        id="myFile"
        name="filename"
      />
    </div>
  );
}

export default ImageUploader;
