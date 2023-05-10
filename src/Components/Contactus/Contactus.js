import { Typography, Image } from "antd";
import React from "react";
import "./contactus.scss";
import true2 from "../image/true2.jpeg";
import aboutus1 from "../image/aboutus1.webp";
import fast from "../image/fast.avif";

const Contactus = () => {
  return (
    <>
      <div className="contactmain">
        <div className="con">
          <Typography.Title className="t1">Contact Us</Typography.Title>
        </div>

        <div className="contact_image">
          <Image src={aboutus1} className="i1"></Image>
        </div>

        <div className="feature">
          <div className="image1">
            <Image src={true2} className="true"></Image>
          </div>
        </div>
        <div className="secure">
          <Typography.Title className="service">
            Secured services
          </Typography.Title>
        </div>
        <div className="paragraph">
          <Typography.Paragraph className="para">
            We provide efficient and prompt mail management services to the each
            and every segment of the society.
          </Typography.Paragraph>
        </div>

        <div className="fast">
          <Image src={fast} className="f1"></Image>
        </div>
        <div className="secure2">
          <Typography.Title className="service2">
            Fast delivery
          </Typography.Title>
        </div>
        <div className="paragraph2">
          <Typography.Paragraph className="para2">
            Delivery with security and service for sensitive documents for
            enterprise as well as common man is our prime goal.
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
};

export default Contactus;
