import React, { useState, useEffect } from "react";
import "./addbranchstaff.scss";
import { Link } from "react-router-dom";
import { Form, Input, Typography, List, Button, Image } from "antd";
import home from "../../image/home.png";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';  
import { getToken } from "../../Services/getToken";
import { toast } from "react-toastify";

const AddBranchStaff = () => {
  const [data, setData] = useState([]);
  const [branchname, setBranchname] = useState([]);
  const [err, setErr] = useState({});
  const [isEdit, setisEdit] = useState(false);
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
    console.log(newStaff);

    // const { name, value } = e.target;
    // console.log(name, value);
    // console.log(e);
    // setStaff({
    //   ...staff,
    //   [name]: value,
    // });
  };

  useEffect(() => {
    if (getToken) {
      axios.get("http://localhost:8000/bloggedin", {
        headers: { authorization: getToken },
      }).then((res) => {
        const branchname = res.data.userValid.branchname;
        setBranchname(res.data.userValid.branchname);
      });
    }
  }, []);

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

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  useEffect(() => {
      if (id) {
          axios.get(`http://localhost:8000/editstaffdata/${id}`)
              .then((res) => {
                  console.log("data:", res.data.staffData)
                  setStaff(res.data.staffData)
                  setisEdit(!isEdit);
              })
      }
  }, [])

  const editData = (e) => {
      e.preventDefault();
      const { staffname, staffemail, branchname, staffaddress, city, contactnumber } = staff;
      const staffdata = { staffname, staffemail, branchname, staffaddress, city, contactnumber };
      axios.put(`http://localhost:8000/updateStaffData/${id}`, staffdata)
          .then((res) => {
              if (res.status === 200) {
                  toast.success("Updated Successfully..", { autoClose: 1000 }
                      , {
                          position: "top-center",
                      })
              }
          })
          .catch((error) => {
              toast.error("Fail To Update Data", {
                  position: "top-center",
              })
          })
  }
  const validation = () => {
      const err = {};
      let isValid = true;
      if (!staff.staffname || staff.staffname === " "){
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
      //Adress Validation
      if (!staff.staffaddress || staff.staffaddress === " ") {
          err.staffaddress = "Field Can-Not Be Empty";
          isValid = false;
      }
      //Contact
      if (!staff.contactnumber) {
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
      //Email Address
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
            <Typography.Text  style={{color : "red"}}>
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
            <Typography.Text  style={{color : "red"}}>
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
            <Typography.Text  style={{color : "red"}}>
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
            <Typography.Text  style={{color : "red"}}>
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
            <Typography.Text  style={{color : "red"}}>{err["city"]}</Typography.Text>
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
            <Typography.Text style={{color : "red"}} className="err">
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
