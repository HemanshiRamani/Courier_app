import React from "react";
import { Form, Typography, Input, Select, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./addbranchparcel.scss";
import Branchdash from "../Branchdash/Branchdash";

const Addbranchparcel = () => {
  return (
    <>
      <Typography.Title className="parceldetail">
        Add Parcel Detail
      </Typography.Title>
      <Form className="form1">
        <div className="inputfield">
          <Typography.Title className="addParagraph">
            Sender Full Name:
          </Typography.Title>
          <Input
            className="input"
            type="text"
          />
          <Typography.Title className="addParagraph">
            Receiver Full Name:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Sender Address:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Receiver Address:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Sender Contact:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Receiver Contact:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Sender Email:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Receiver Email:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Sender City:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Receiver City:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Branch Processed
          </Typography.Title>
          <Input className="input" type="text" />

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
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Height:
          </Typography.Title>
          <Input className="input" type="text" />

          <Typography.Title className="addParagraph">
            Width:
          </Typography.Title>
          <Input className="input" type="text" />

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
          <Input className="input" type="text" placeholder="Get Price"/>

          <div className="icon">
          <CloseCircleOutlined className="close"/>
          </div>
        </div>

        <div className="link">
          <Button className="addbtn">Add Parcel</Button>
        </div>
      </Form>
      <div>
        <Branchdash />
      </div>
    </>
  );
};

export default Addbranchparcel;
