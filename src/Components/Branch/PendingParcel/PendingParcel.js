import { Typography, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import "./pendingparcel.scss";
import Branchdash from "../Branchdash/Branchdash";
const pendingParcel = () => {
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
        </div>
      },
    },
    {
        title: "Sr.No",
        dataIndex: "Srno",
        key: "Srno",
      },
    {
      title: "Ref No",
      dataIndex: "RefNo",
      key: "RefNo",
    },
    {
      title: "Receiver Name",
      dataIndex: "ReceiverName",
      key: "ReceiverName",
    },
    {
      title: "Receiver Address",
      dataIndex: "Receiveraddress",
      key: "Receiveraddress",
    },
    {
      title: "Order Date",
      dataIndex: "OrderDate",
      key: "OrderDate",
    },
    {
      title: "Destination Branch",
      dataIndex: "DestinationBranch",
      key: "DestinationBranch",
    },
    {
      title: "Parcel Status",
      dataIndex: "PareclSatus",
      key: "ParcelStatus",
    }
  ];
  return (
    <>
      <div className="add">
        <div className="EditBranch">
          <Typography.Title className="parcel">Pending Parcel Details</Typography.Title>
        </div>
        <div className="col">
          <Table columns={columns} />
        </div>
        <Branchdash/>
      </div>
    </>
  );
};
export default pendingParcel;
