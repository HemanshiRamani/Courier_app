import { Typography, Col } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <div className="side-nav">
          <Typography.Title className="title"> Admin</Typography.Title>
          <div className="link">
            <Col className="col">
              <Link to="/dashboard" className="dash">
                Dashboard
              </Link>

              <Link to="/addbranch" className="dash">
                Add Branch
              </Link>

              <Link to="/branchtable" className="dash">
                Branch Detail
              </Link>

              <Link to="/reportdetails" className="dash">
                Reports
              </Link>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

