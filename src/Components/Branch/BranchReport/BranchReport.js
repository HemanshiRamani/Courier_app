import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import "./branchreport.scss";
import { Select, Space, DatePicker } from "antd";
import Branchdash from "../Branchdash/Branchdash";
const BranchReport = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <div className="reportdetail">
        <Typography.Title className="Reports">Reports</Typography.Title>
        <br />
        <br />

        <div className="link">
          <Link className="branch">Branch Report</Link>
        </div>

        <div className="select">
          <Typography.Text className="text">
            Select Branch Status:
          </Typography.Text>
          <Select
            defaultValue="Select"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Collected",
                label: "Collected",
              },
              {
                value: "Delivered",
                label: "Delivered",
              },
              {
                value: "Received",
                label: "Received",
              },
              {
                value: "Delivered By Staff",
                label: "Delivered By Staff",
              },
            ]}
          />
        </div>
        <div className="date">
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </div>

        <div className="btn">
          <Button className="parcel_report">Parcel Report</Button>
        </div>

        <div className="BranchReport">
          <Link className="staff">Staff Report</Link>
        </div>

        <div className="select">
          <Typography.Text className="text">
            Select Staff Status:
          </Typography.Text>
          <Select
            defaultValue="Select"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Collected",
                label: "Collected",
              },
              {
                value: "Delivered",
                label: "Delivered",
              },
              {
                value: "Received",
                label: "Received",
              },
              {
                value: "Delivered By Staff",
                label: "Delivered By Staff",
              },
            ]}
          />
        </div>
        <div className="date">
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
        </div>

        <div className="btn">
          <Button className="parcel_report">Staff Report</Button>
        </div>
      </div>
      <div>
        <Branchdash />
      </div>
    </>
  );
};
export default BranchReport;
