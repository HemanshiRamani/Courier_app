import React from "react";
import { Button, Divider, Form, Input, Typography } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./branchlogin.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BranchLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/branchlogin", { username, password })
      .then((res) => {
        if (res.status === 200) {
          navigate("/branchinfo");
          window.location.reload();
          toast.success(
            "Login Successfully..",
            { autoClose: 1000 },
            {
              position: "top-center",
            }
          );
          localStorage.setItem("token", `Bearer ${res.data.token}`);
        }
      })
      .catch((error) => {
        toast.error("Invalid Details", {
          position: "top-center",
        });
      });
  };
  const validation = () => {
    const err = {};
    let isValid = true;
    if (!username) {
      err.username = "Please Enter UserName";
      isValid = false;
    }
    if (!password) {
      err.password = "Please Enter Password";
      isValid = false;
    }

    setErr(err);
    return isValid;
  };
  const submit = (e) => {
    e.preventDefault();
    const isValid = validation();
    console.log(isValid);
    if (isValid) {
      login(e);
    }
  };

  return (
    <div className="login">
      <Form method="POST" className="form" to="/dashboard">
        <Typography.Text className="admin">Branch Login</Typography.Text>
        <Typography.Title className="loginhere">Login here</Typography.Title>

        <Form.Item
          // rules={[
          //   {
          //     required: true,
          //     type: "username",
          //     message: "Please enter valid user name",
          //   },
          // ]}
          label="UserName"
          name={"UserName"}
        >
          <Input
            placeholder="Enter User Name"
            className="forminput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
        </Form.Item>
        <Typography.Text className="err">{err["username"]}</Typography.Text>

        <Form.Item
       
          label="Password"
          name={"Password"}
        >
          <Input.Password
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input.Password>
        </Form.Item>
        <Typography.Text className="err">{err["password"]}</Typography.Text>

        <Button onClick={submit} type="primary" htmlType="submit" block>
          Login
        </Button>

        <Divider className="divider">or Login with</Divider>
        <div className="icon">
          <GoogleOutlined className="GoogleOutlined" />
          <FacebookFilled className="FacebookFilled" />
          <TwitterOutlined className="TwitterOutlined" />
        </div>
      </Form>
    </div>
  );
};

export default BranchLogin;
