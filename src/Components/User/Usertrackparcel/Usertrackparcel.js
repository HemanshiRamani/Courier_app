import React from "react";
import { Typography, Input, Button } from "antd";
import "./usertrackparcel.scss";
import { SearchOutlined } from "@ant-design/icons";
// import trackbg1 from "../../image/trackbg1.jpg";

const Usertrackparcel = () => {
  return (
    <>
      <div className="utmain">
        <div className="container">
          <div className="con1">
            <Typography.Title className="title">
              Track Your parcel
            </Typography.Title>
          </div>
          <div className="search">
            <Input
              placeholder="Enter reference Number.."
              name="reference"
              className="input"
            ></Input>
            <SearchOutlined className="SearchOutlined" />
            <Button type="primary" className="btn">
              Next
            </Button>

            <div className="captcha_main">
              <Input
                placeholder="Enter Captcha"
                name="captcha"
                className="captcha"
              ></Input>
              <Button type="primary" className="btn2">Search</Button>
            </div>
          </div>
        </div>
      </div>



      {/* <div className='track_main'>
            <div className='track'>
                <Typography.Title className='t1'>Parcel Status</Typography.Title>
                <Typography.Title className='t2'>Reference Number</Typography.Title>
                <div className='usertrack'>
                    <div className='track2'>
                        <div className='text'>Order Collected</div>
                        <div className='text'>In-Transit</div>
                        <div className='text'>Pickedup By Branch</div>
                        <div className='text'>Ready For Delivere</div>
                        <div className='text'>Delivered</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className='d-table'>
                            <div className='d-row'>
                                <div className='d-cell'>Shipped with</div>
                            </div>
                            <div className='d-row'>
                                <div className='d-cell'>Estimated Delivery</div>
                            </div>
                            <div className='d-row'>
                                <div className='d-cell'>Parcel Status</div>
                            </div>
                            <div className='d-row'>
                                <div className='d-cell'>Sender Name</div>
                            </div>
                            <div className='d-row'>
                                <div className='d-cell'>Receiver Name</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  );
};

export default Usertrackparcel;
