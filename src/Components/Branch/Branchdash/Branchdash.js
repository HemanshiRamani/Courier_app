import { Typography, Col } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "./branchdash.scss";

const Branchdash = () => {
  return (
    <>
      <div className="header">
        <div className="side-nav">
          <Typography.Title className="title">Branch Admin</Typography.Title>
          <div className="link">
            <Col className="col">
              <Link to="/branchinfo" className="dash">
                Dashboard
              </Link>

              <Link to="/bstaff" className="dash">
                Branch Staff
              </Link>

              <Link to="/viewparcel" className="dash">
                View Parcel
              </Link>

              <Link to="/receiveparcel" className="dash">
                Receive Parcel
              </Link>

              <Link to="/pendingparcel" className="dash">
                Pending Parcel
              </Link>

              <Link to="/addbranchparcel" className="dash">
                Add Parcel
              </Link>

              <Link to="/branchreport" className="dash">
                Report
              </Link>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branchdash;
