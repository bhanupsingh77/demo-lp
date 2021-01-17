import React from "react";
import "./Header.css";
import logo from "../Assets/HeaderImgs/group.png";
import arrow from "../Assets/HeaderImgs/arrow.png";

function Header() {
  return (
    <div>
      <div className="header-nav-bar">
        <img className="header-nav-bar-logo" src={logo} alt="loading"></img>
        <div>
          <a className="header-nav-bar-item1" href="#">
            Use cases
          </a>
        </div>
        <img className="header-nav-bar-arrow" src={arrow} alt="loading"></img>
        <div>
          <a className="header-nav-bar-item2" href="#">
            Blog
          </a>
        </div>
        <div>
          <a className="header-nav-bar-item3" href="#">
            Pricing
          </a>
        </div>
        <div>
          <a className="header-nav-bar-item4" href="#">
            Contact us
          </a>
        </div>
        <div className="header-nav-bar-item5-container">
          <a className="header-nav-bar-item5" href="#">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
