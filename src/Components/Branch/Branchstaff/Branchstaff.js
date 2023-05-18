import { Typography, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import "./branchstaff.scss";
const Branchstaff = () => {
  const columns = [
    {
      title: "Action",
      key: "action",
      render: () => {
        <div>
          <Button>
            <DeleteOutlined />
          </Button>
          <Button>
            <EditOutlined />
          </Button>
        </div>;
      },
    },
    {
      title: "Staff Name",
      dataIndex: "StaffName",
      key: "StaffName",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Branch Name",
      dataIndex: "BranchName",
      key: "BranchName",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "City",
      dataIndex: "City",
      key: "City",
    },
    {
      title: "Contact Number",
      dataIndex: "ContactNumber",
      key: "ContactNumber",
    },
  ];
  return (
    <>
      <div className="add">
        <div className="EditBranch">
          <Typography.Title className="staff">Staff Details</Typography.Title>
          <Button className="btn">ADD STAFF</Button>
        </div>
        <div className="col">
          <Table columns={columns} />
        </div>
      </div>
    </>
  );
};
export default Branchstaff;
