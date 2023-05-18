import { Typography, Form, Input, Button } from "antd";
import React from "react";
import "./addbranchparcel.scss";
import { Link } from "react-router-dom";
import { CloseSquareOutlined } from "@ant-design/icons";

const Addbranchparcel = () => {
  return (
    <>
      <div className="mainadd">
        <Form className="parcel">
          <Typography.Title className="add_title">
            Add Parcel Detail
          </Typography.Title>
          <Form.Item label="Sender Full Name">
            <Input className="input" />
          </Form.Item>

          <Form.Item label="Receiver Full Name">
            <Input className="input" />
          </Form.Item>

          <Form.Item label="Sender Address">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Receiver Address">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Sender Contact Number">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Receiver Contact Number">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Sender Email">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Receiver Email">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Sender City">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Receiver City">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Branch Processed">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Destination Branch">
            <Input className="input"></Input>
          </Form.Item>

          <Form.Item label="Weight">
            <Input className="input2"></Input>
          </Form.Item>

          <Form.Item label="Height">
            <Input className="input2"></Input>
          </Form.Item>

          <Form.Item label="Width">
            <Input className="input2"></Input>
          </Form.Item>

          <Form.Item label="Route">
            <Input className="input2"></Input>
          </Form.Item>

          <Form.Item label="Price">
            <Input className="input2"></Input>
          </Form.Item>
          
          <Link className="link">
            <CloseSquareOutlined className="close"/>
          </Link>

          <Button className="aparcel">Add Parcel</Button>
        </Form>
      </div>
    </>
  );
};

export default Addbranchparcel;
