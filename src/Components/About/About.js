import { Typography, Image } from "antd";
import React from "react";
import "./about.scss";
import team1 from "../image/team1.jpeg";

const About = () => {
  return (
    // 
    <> 
      <div className="aboutmain">
        <div className="about">
          <Typography.Title className="t1">Meet our team</Typography.Title>
        </div>

        <div className="row">
          <div className="column">
            <div className="team">
              <div className="team_img">
                <Image src={team1} className="team1"></Image>
              </div>
              <div className="team_content">
                <Typography.Title className="title">Hemanshi</Typography.Title>
                <Typography.Title className="title2">
                  Developer
                </Typography.Title>
                <Typography.Text className="text">
                  hemanshi12@gmail.com
                </Typography.Text>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="team">
              <div className="team_img">
                <Image src={team1} className="team1"></Image>
              </div>
              <div className="team_content">
                <Typography.Title className="title">Hemanshi</Typography.Title>
                <Typography.Title className="title2">Developer</Typography.Title>
                <Typography.Text className="text">hemanshi12@gmail.com</Typography.Text>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="team">
              <div className="team_img">
                <Image src={team1} className="team1"></Image>
              </div>
              <div className="team_content">
                <Typography.Title className="title">Hemanshi</Typography.Title>
                <Typography.Title className="title2">Developer</Typography.Title>
                <Typography.Text className="text">hemanshi12@gmail.com</Typography.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
