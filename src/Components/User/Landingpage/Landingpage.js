import React from "react";
import { Link } from "react-router-dom";
import { Typography} from "antd";
import "./landingpage.scss";

const Landingpage = () => {
  return (
    <>
      <div className="main">
        <div className="landing">
          <div className="logo">
            <Typography.Title className="title">HR Courier</Typography.Title>
          </div>
          <div className="header">
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="service" to="/services">
              Services
            </Link>
            <Link className="contact" to="/contact">
              Contact Us
            </Link>
            <Link className="about" to="/about">
              About Us
            </Link>
            <Link className="feedback" to="/feedback">
              FeedBack
            </Link>
          </div>
        </div>
        
        <div className="landing2">
          <div className="first">
          <Typography.Title className="title2">FAST SIMPLE & QUICK COURIER SERVICES</Typography.Title>
          </div>
          <div className="second">
            <Typography.Title className="title3">Always delivermore than expected</Typography.Title>
          </div>
        </div>

        <div className="landing3">
          <div className="second">
          <Link className="track">Track Your Parcel</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
