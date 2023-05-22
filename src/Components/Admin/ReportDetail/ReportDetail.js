import { Typography, Select, Space, DatePicker, Button } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./ReportDetail.scss"

const ReportDetail = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <div className='report'>
        <div className='reportdetail'>
          <Typography.Title className='Reports'>Reports</Typography.Title><br /><br />
        </div>
        <div className='link' >
          <Link className='user'>User Report</Link>
        </div>
        <div className='BranchReport'>
          <Link className='branch'>Branch Report</Link>

          <div className="option">
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
          <div className="cal">
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </div>

          <div className='button'>
            <Button className='preport'>Parcel Report</Button>
          </div>
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default ReportDetail




