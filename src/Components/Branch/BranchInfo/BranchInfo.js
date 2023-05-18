import React from "react";
import "./branchinfo.scss";
import { Typography, Row, Card } from "antd";
const { Meta } = Card;

const BranchInfo = () => {
  return (
    <>
      <div className="branchinfo">
        <Row>
          <div className="info">
            <Typography.Text className="text">
              Parcel Status Details
            </Typography.Text>
          </div>

          <div className="info2">
            <Typography.Text className="text2">
              Total Parcel & Total Branch
            </Typography.Text>
          </div>
        </Row>

        <Card className="card" hoverable>
          <Meta title="Total Parcel" description="Total Parcel At Branch" />
        </Card>

        <Card className="card" hoverable>
          <Meta title="Total Staff" description="Total Staff In Branch" />
        </Card>

        <Card className="card" hoverable>
          <Meta title="Collected" description="Parcel Collected By Branch" />
        </Card>

        <Card className="card" hoverable>
          <Meta title="In Transit" description="Dispatched By Branch" />
        </Card>

        <div className="maincard">
        <Card className="card2" hoverable>
          <Meta title="Arrived At Destination" description="Delivered At Destination" />
        </Card>

        <Card className="card2" hoverable>
          <Meta title="Received" description="Received By Branch" />
        </Card>

        <Card className="card2" hoverable>
          <Meta title="Out For Delivery" description="Assign To Staff" />
        </Card>

        <Card className="card2" hoverable>
          <Meta title="Delivered" description="Delivered By Staff" />
        </Card> 
        </div>

      </div>
    </>
  );
};

export default BranchInfo;
