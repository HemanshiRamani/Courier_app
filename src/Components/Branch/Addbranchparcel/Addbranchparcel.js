import React, { useState } from "react";
import { Form, Typography, Input, Select, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Branchdash from "../Branchdash/Branchdash";
import { toast } from "react-toastify";
import axios from "axios";

import "./addbranchparcel.scss";

const Addbranchparcel = () => {
  const [err, setErr] = useState({})
  const [add, setAdd] = useState({
    referancenumber: " ",
    sendername: " ",
    receivername: " ",
    senderaddress: " ",
    receiveraddress: " ",
    sendercontactnumber: " ",
    receivercontactnumber: " ",
    senderemail: " ",
    receiveremail: " ",
    sendercity: " ",
    receivercity: " ",
    branchprocessed: " ",
    pickupbranch: " ",
    weight: " ",
    height: " ",
    width: " ",
    route: " ",
  });
  const handlechange = (e) => {
    const newadd = { ...add };
    newadd[e.target.id] = e.target.value;
    setAdd(newadd);
  };
  const addData = (e) => {
    e.preventDefault();
    const {
      referancenumber,
      sendername,
      receivername,
      senderaddress,
      receiveraddress,
      sendercontactnumber,
      receivercontactnumber,
      senderemail,
      receiveremail,
      sendercity,
      receivercity,
      branchprocessed,
      pickupbranch,
      weight,
      height,
      width,
      route,
    } = add
    const adddata = {
      referancenumber: referancenumber.trim(),
      sendername,
      receivername,
      senderaddress,
      receiveraddress,
      sendercontactnumber,
      receivercontactnumber,
      senderemail,
      receiveremail,
      sendercity,
      receivercity,
      branchprocessed,
      pickupbranch,
      weight,
      height,
      width,
      route,
    }
    axios.get("http://localhost:8000/bloggedin", adddata)
      .then((res) => {
        console.log("res", res)
        if (res.status === 200) {
          toast.success(
            "Data Added Succefully...",
            { autoClose: 1000 },
            {
              position: "top-center",
            });
        }
      })
      .catch((error) => {
        toast.error("Fail To Add Data", {
          position: "top-center",
        })
      })
    setAdd({
      referancenumber: " ",
      sendername: " ",
      receivername: " ",
      senderaddress: " ",
      receiveraddress: " ",
      sendercontactnumber: " ",
      receivercontactnumber: " ",
      senderemail: " ",
      receiveremail: " ",
      sendercity: " ",
      receivercity: " ",
      branchprocessed: " ",
      pickupbranch: " ",
      weight: " ",
      height: " ",
      width: " ",
      route: " ",
    });
  }
  const validation = () => {
    const err = {};
    let isValid = true;
    if (!add.sendername || add.sendername === "") {
      err.sendername = "Fali Can-Not Be Empty"
    }
    else if (typeof add.sendername !== "undefined") {
      if (!add.sendername.match(/^[a-zA-Z-, ]+$/)) {
        err.sendername = "Please Enter Only Letter";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    //Receiver name
     if(!add.receivername || add.receivername ===" "){
      err.receivername = "Field Can-Not Be Empty";
       isValid = false;
     }
     else if (typeof add.receivername !== "undefined") {
          if (!add.receivername.match(/^[a-zA-Z-, ]+$/)) {
            err.receivername = "Please Enter Only Letter";
            isValid = false;
          }
        }
      else{
        console.log("no data")
      }

        //Sender Adress Validation
        if(!add.senderaddress ||add.senderaddress ===" "){
           err.senderaddress = "Field Can-Not Be Empty";
           isValid= false;
        }
        //Receiver Adress Validation
        if(!add.receiveraddress ||add.receiveraddress ===" "){
          err.receiveraddress = "Field Can-Not Be Empty"
          isValid = false;
        }
          //Sender Contact
          // if(!add.sendercontactnumber ||add.sendercontactnumber ===" "){
          //    err.sendercontactnumber = "Field Can-Not Be Empty";
          //    isValid =false;
          // }
         
          // else if(typeof add.sendercontactnumber !== "undefined"){
          //   if(!add.sendercontactnumber.trim().match(/^\d{10}$/)){
          //     err.sendercontactnumber = "Please Enter 10 Degit";
          //   }
          // }
          // else {
          //   console.log("no data")
          // }

          //Receiver Contact
        //   if(add.receivercontactnumber ||add.receivercontactnumber ===" "){
        //       err.receivercontactnumber = "Field Can-Not Be Empty";
        //       isValid = false;
        //   }
        //  else if (typeof add.receivercontactnumber !== "undefined"){
        //   if(!add.receivercontactnumber.trim().match(/^\d{10}$/)){
        //     err.receivercontactnumber = "Please Enter 10 Digit";
        //   }
        //  }
          //Sender Email Address
          if(!add.senderaddress ||add.senderaddress ===" "){
            err.senderaddress = "field Can-Not Be Empty";
            isValid = false
          }
          else if(typeof add.senderaddress !== "undefined"){
         if(!add.senderaddress.trim().match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
          err.senderaddress = "Enter Email in Proper Format "
         }
          }
          if(!add.receivercontactnumber ||add.receivercontactnumber)

    setErr(err);
    return isValid;
  }

  const addb = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      addData(e);
    }
  }
  return (
    <>
      <div className="bg">
        <Typography.Title className="parceldetail">
          Add Parcel Detail
        </Typography.Title>

        <Form className="form1">e
          <div className="inputfield">
            <Typography.Title className="addParagraph">
              Sender Full Name:
            </Typography.Title>
            <Input
              className="input"
              type="text"
             onChange={(e) =>handlechange (e.target.value)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["sendername"]}
            </Typography.Text>


            <Typography.Title className="addParagraph">
              Receiver Full Name:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="receivername"
              value={add.receivername}
              onChange={(e) => handlechange(e)}
              
            />
            <Typography.Text style={{ color: "red" }}>
              {err["receivername"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Sender Address:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="senderaddress"
              value={add.senderaddress}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["senderaddress"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Receiver Address:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="receiveraddress"
              value={add.receiveraddress}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["receiveraddress"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Sender Contact:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="sendercontactnumber"
              value={add.sendercontactnumber}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["sendercontactnumber"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Receiver Contact:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="receivercontactnumber"
              value={add.receivercontactnumber}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["receivercontactnumber"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Sender Email:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="senderemail"
              value={add.senderemail}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["senderemail"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Receiver Email:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="receiveremail"
              value={add.receiveremail}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["receiveremail"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Sender City:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="sendercity"
              value={add.sendercity}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["sendercity"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Receiver City:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="receivercity"
              value={add.receivercity}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["receivercity"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Branch Processed
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="branchprocessed"
              value={add.branchprocessed}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["branchprocessed"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Destination Branch
            </Typography.Title>
            <Select
              placeholder="Select Branch Name"
              className="select"
              options={[
                {
                  value: "Surat",
                  label: "Surat",
                },
                {
                  value: "Vadodara",
                  label: "Vadodara",
                },
                {
                  value: "Vapi",
                  label: "Vapi",
                },
                {
                  value: "Navsari",
                  label: "Navsari",
                },
              ]}
            />

            <Typography.Title className="addParagraph">
              Weight:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="weight"
              value={add.weight}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["weight"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Height:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="height"
              value={add.height}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["height"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Width:
            </Typography.Title>
            <Input
              className="input"
              type="text"
              id="width"
              value={add.width}
              onChange={(e) => handlechange(e)}
            />
            <Typography.Text style={{ color: "red" }}>
              {err["width"]}
            </Typography.Text>

            <Typography.Title className="addParagraph">
              Route:
            </Typography.Title>

            <Select
              placeholder="Route"
              className="select"

              options={[
                {
                  value: "By Road",
                  label: "By Road",
                },
                {
                  value: "By Air",
                  label: "By Air",
                },
                {
                  value: "By Train",
                  label: "By Train",
                },
                {
                  value: "By Ship",
                  label: "By Ship",
                },
              ]}
            />

            <Typography.Title className="addParagraph">
              Price:
            </Typography.Title>
            <Input className="input" type="text" placeholder="Get Price" />
            <div className="icon">
              <CloseCircleOutlined className="close" />
            </div>
          </div>
          <div className="link">
            <Button className="addbtn" onClick={addb}>Add Parcel</Button>
          </div>
        </Form>
      </div>
      <div>
        <Branchdash />
      </div>
    </>
  );
};

export default Addbranchparcel;
