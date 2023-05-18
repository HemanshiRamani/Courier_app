import React from "react";
import "./addbranchstaff.scss";
import { Link } from "react-router-dom";
import { Form, Input, Typography, List, Button, Image } from "antd";
import home from "../../image/home.png";
const AddBranchStaff = () => {
  return (
    <>
      <div className="add_staff">
        <div className="img">
          <Link>
            <Image src={home} className="home"></Image>
          </Link>
        </div>
        <Form className="Form">
          <Typography.Title className="title">
            Add Staff Detail
          </Typography.Title>
          <List className="list">
            <Form.Item className="staffname" label="Staff Name">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="li">
            <Form.Item label="Staff E-Mail" className="staff_email">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="bname">
            <Form.Item label="Branch Name" className="branch_name">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="address">
            <Form.Item label="Staff Address" className="staff_address">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="scity">
            <Form.Item label="City" className="City">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="contact">
            <Form.Item label="Staff Contact Number" className="snumber">
              <Input type="text" className="input" />
            </Form.Item>
          </List>
          <List className="button">
            <Button type="submit" className="btn">
              Add Staff
            </Button>
          </List>
        </Form>
      </div>
    </>
  );
};
export default AddBranchStaff;
