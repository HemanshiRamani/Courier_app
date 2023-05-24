import React, { useEffect } from "react";
import { Carousel } from "antd";
import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import BranchLogin from "../Branch/BranchLogin/BranchLogin";
import StaffLogin from "../Staff/StaffLogin/StaffLogin";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Services/getToken";
import Axios from "axios";

const Home = () => {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const navigate = useNavigate()

  useEffect(()=>{
      if(getToken){
        Axios.get("http://localhost:8000/aloggin", { headers: { 'authorization': getToken } })
        .then((res)=>{
          const data = res.data.data;
          if(data.type === "admin"){
            navigate("/dashboard")
          }
          else if(data.type === "branch"){
            navigate("/branchinfo")
          }
          else{
            navigate("/")
          }
        })
      }
  })

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
