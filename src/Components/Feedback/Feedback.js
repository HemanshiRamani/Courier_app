import { Typography, Form, Input, Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import "./feedback.scss";

const Feedback = () => {
    const submit = () => {
        message.success("Submitted Successfully...!!!")
    }
  return (
    <>
      <div className="mainfeed">
        <Form className="form" onFinish={submit}>
          <Typography.Title className="review">
            Give Your Review
          </Typography.Title>

          <Form.Item
            label="First Name"
            rules={[
              { required: true, message: `Please Enter Your First Name` },
            ]} 
            name="fname"
          >
            <Input placeholder="Enter First Name." />
          </Form.Item>

          <Form.Item
            label="Last Name"
            rules={[{ required: true, message: `Please Enter Your Last Name` }]}
            name="lname"
          >
            <Input placeholder="Enter Last Name." />
          </Form.Item>

          <Form.Item
            label="Contact No."
            rules={[
              { required: true, message: `Please Enter Your Contact Number` },
            ]}
            name="contact"
          >
            <Input placeholder="Enter Contact No." />
          </Form.Item>

          <Form.Item
            label="Email"
            rules={[
              {
                required: true,
                type: `email`,
                message: `Please Enter Your Email`,
              },
            ]}
            name="email"
          >
            <Input placeholder="Enter Email." />
          </Form.Item>

          <Form.Item
            label="Facts a problem:"
            rules={[
              {
                required: true,
                message: `Enter Something`,
              },
            ]}
            name="problem"
          >
            <TextArea placeholder="Enter Comment"></TextArea>
          </Form.Item>

          <Form.Item
            label="Comment:"
            rules={[
              {
                required: true,
                message: `Enter Something`,
              },
            ]}
            name="comment"
          >
            <TextArea placeholder="Enter Comment"></TextArea>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={false}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Feedback;
