import React from "react";
import "./footer.scss";
import { Col, Typography } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="footer">
          <Col className="column">
            <Link to="https://facebook.com/" target="_blank">
              <FacebookOutlined className="icon" />
            </Link>
            <Link to="https://twitter.com/i/flow/login" target="_blank">
              <TwitterOutlined className="icon" />
            </Link>
            <Link to="https://www.google.com" target="_blank">
              <GoogleOutlined className="icon" />
            </Link>
            <Link to="https://www.instagram.com" target="_blank">
              <InstagramOutlined className="icon" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <LinkedinOutlined className="icon" />
            </Link>
            <Link to="https://github.com/" target="_blank">
              <GithubOutlined className="icon" />
            </Link>
          </Col>
        </div>
        <div className="content">
          <Typography.Paragraph className="f1">
            @ 2022 Copiright: HR Courier Service
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
};

export default Footer;
