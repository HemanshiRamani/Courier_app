import { Typography, Table, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import "./viewparcel.scss";
import Branchdash from "../Branchdash/Branchdash";
const ViewParcel = () => {
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
      title: "Receiver Phno",
      dataIndex: "ReceiverPhno",
      key: "ReceiverPhno",
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
      dataIndex: "ParcelStatus",
      key: "ParcelStatus",
    }
  ];
  return (
    <>
      <div className="add">
        <div className="EditBranch">
          <Typography.Title className="parcel">Parcel Details</Typography.Title>
        </div>
        <div className="col">
          <Table columns={columns} />
        </div>
        <Branchdash/>
      </div>
    </>
  );
};
export default ViewParcel;
