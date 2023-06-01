
import React, { useState } from "react";
import "./addbranchstaff.scss";
import { Link } from "react-router-dom";
import { Form, Input, Typography, List, Button, Image } from "antd";
import home from "../../image/home.png";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { toast } from "react-toastify";


const AddBranchStaff = () => {
  const [err, setErr] = useState({});
  const [staff, setStaff] = useState({
    staffname: " ",
    staffemail: " ",
    branchname: " ",
    staffaddress: " ",
    city: " ",
    contactnumber: " ",
  });
  const handlechange = (e) => {
    const newStaff = { ...staff };
    newStaff[e.target.id] = e.target.value;
    setStaff(newStaff);
  };
  const AddData = (e) => {
    e.preventDefault();
    const {
      staffname,
      staffemail,
      branchname,
      staffaddress,
      city,
      contactnumber,
    } = staff;
    const staffdata = {
      staffname: staffname.trim(),
      staffemail,
      branchname,
      staffaddress,
      city,
      contactnumber,
    };
    axios.post("http://localhost:8000/addstaff", staffdata)
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          toast.success(
            "Data Added Successfully...",
            { autoClose: 1000 },
            {
              position: "top-center",
            }
          );
        }
      })
      .catch((error) => {
        toast.error("Fail To Add Data", {
          position: "top-center",
        });
      });
    setStaff({
      staffname: " ",
      staffemail: " ",
      branchname: " ",
      staffaddress: " ",
      city: " ",
      contactnumber: " ",
    });
  };
  const validation = () => {
    const err = {};
    let isValid = true;
    //staffname
    if (!staff.staffname || staff.staffname === " ") {
      err.staffname = "Field Cant Not Be Empty";
      isValid = false;
    }
    else if (typeof staff.staffname !== "undefined") {
      if (!staff.staffname.match(/^[a-zA-Z-, ]+$/)) {
        err.staffname = "Please Enter Only Letter";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    //branchname
    if (!staff.branchname || staff.branchname === " ") {
      err.branchname = "Field Can Not be Empty";
      isValid = false;
    }
    else if (typeof staff.branchname !== "undefined") {
      if (!staff.branchname.match(/^[a-zA-Z-, ]+$/)) {
        err.branchname = "Please Enter Only Letter";
        isValid = false;
      }
    }
    //Adress
    if (!staff.staffaddress || staff.staffaddress === " ") {
      err.staffaddress = "Field Can-Not Be Empty";
      isValid = false;
    }
    //Contact
    if (!staff.contactnumber || staff.contactnumber === " ") {
      err.contactnumber = "Field Cant Not Be Empty";
      isValid = false;
    }
    else if (typeof staff.contactnumber !== "undefined") {
      if (!staff.contactnumber.match(/^\d{10}$/)) {
        err.contactnumber = "Please Enter 10 Digit";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    //Email
    if (!staff.staffemail || staff.staffemail === " ") {
      err.staffemail = "Field Cant Not Be Empty";
      isValid = false;
    }
    else if (typeof staff.staffemail !== "undefined") {
      if (!staff.staffemail.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
        err.staffemail = "Enter Email in Proper Format";
        isValid = false;
      }
    }
    //City
    if (!staff.city || staff.city === " ") {
      err.city = "Field Cant Not Be Empty";
      isValid = false;
    }
    else if (typeof staff.city !== "undefined") {
      if (!staff.city.match(/^[a-zA-Z-, ]+$/)) {
        err.city = "Please Enter Only Letter";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    setErr(err);
    return isValid;
  }
  const onsubmit = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      AddData(e);
    }
  }
  return (
    <>
      <div className="add_staff">
        <div className="img">
          <Link to="/bstaff">
            <Image src={home} className="home"></Image>
          </Link>
        </div>
        <Form className="Form">
          <Typography.Title className="title">
            Add Staff Detail
          </Typography.Title>
          <List className="list">
            <Form.Item className="staffname" label="Staff Name">
              <Input
                type="text"
                className="input"
                id="staffname"
                value={staff.staffname}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }}>
              {err["staffname"]} 
            </Typography.Text>
          </List>
          <List className="li">
            <Form.Item label="Staff E-Mail" className="staff_email">
              <Input
                type="text"
                className="input"
                id="staffemail"
                value={staff.staffemail}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }}>
              {err["staffemail"]}
            </Typography.Text>
          </List>
          <List className="bname">
            <Form.Item label="Branch Name" className="branch_name">
              <Input
                type="text"
                className="input"
                id="branchname"
                
                value={staff.branchname}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }}>
              {err["branchname"]}
            </Typography.Text>
          </List>
          <List className="address">
            <Form.Item label="Staff Address" className="staff_address">
              <Input
                type="text"
                className="input"
                id="staffaddress"
                value={staff.staffaddress}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }}>
              {err["staffaddress"]}
            </Typography.Text>
          </List>
          <List className="scity">
            <Form.Item label="City" className="City">
              <Input
                type="text"
                className="input"
                id="city"
                value={staff.city}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }}>{err["city"]}</Typography.Text>
          </List>
          <List className="contact">
            <Form.Item label="Staff Contact Number" className="snumber">
              <Input
                type="text"
                className="input"
                id="contactnumber"
                value={staff.contactnumber}
                onChange={(e) => handlechange(e)}
                required
              />
            </Form.Item>
            <Typography.Text style={{ color: "red" }} className="err">
              {err["contactnumber"]}
            </Typography.Text>
          </List>
          <List className="button">
            <Button onClick={onsubmit} type="submit" className="btn">
              Add Staff
            </Button>
          </List>
        </Form>
      </div>
    </>
  );
};
export default AddBranchStaff;