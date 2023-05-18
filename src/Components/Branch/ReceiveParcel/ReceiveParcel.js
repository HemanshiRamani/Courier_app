import { Typography, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import "./receiveparcel.scss";
const ReceiveParcel = () => {
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
        title: "Sr.No",
        dataIndex: "Srno",
        key: "Srno",
      },
    {
      title: "RefNo",
      dataIndex: "RefNo",
      key: "RefNo",
    },
    {
      title: "Receiver Name",
      dataIndex: "ReceiverName",
      key: "ReceiverName",
    },
    {
      title: "Sender Branchname",
      dataIndex: "SenderBranchName",
      key: "SenderBranchName",
    },
    {
      title: "Received Date",
      dataIndex: "ReceivedDate",
      key: "ReceivedDate",
    },
    {
      title: "Parcel Status",
      dataIndex: "Parcelstatus",
      key: "Parcelstatus",
    },
    {
      title: "Assign To",
      dataIndex: "AssignTo",
      key: "AssignTo",
    }
  ];
  return (
    <>
      <div className="add">
        <div className="EditBranch">
          <Typography.Title className="parcel">Receive Parcel Details</Typography.Title>
        </div>
        <div className="col">
          <Table columns={columns} />
        </div>
      </div>
    </>
  );
};
export default ReceiveParcel;
