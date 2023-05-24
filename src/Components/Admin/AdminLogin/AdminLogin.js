import React from "react";
import { Button, Divider, Form, Input, Typography } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <Form className="form"></Form>
        <Typography.Text className="admin">Admin Login</Typography.Text>
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

        <Form.Item
          // rules={[
          //   {
          //     required: true,
          //     type: "password",
          //     message: "Please enter valid password",
          //   },
          // ]}
          label="Password"
          name={"Password"}
        >
          <Input.Password
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input.Password>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
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

export default AdminLogin;
