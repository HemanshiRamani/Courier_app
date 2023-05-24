import React from "react";
import { Carousel } from "antd";
import AdminLogin from "../Admin/AdminLogin/Login";
import BranchLogin from "../Branch/BranchLogin/BranchLogin";
import StaffLogin from "../Staff/StaffLogin/StaffLogin";

const Home = () => {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="home">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <AdminLogin />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <BranchLogin />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <StaffLogin />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
