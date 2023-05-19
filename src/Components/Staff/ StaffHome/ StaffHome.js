import React from 'react';
import "./staffhome.scss"
import { Button, Form, Typography, Row } from 'antd';
import {
  UserOutlined,
  BellOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const StaffHome = () => {
  return (
    <>
      <div className='sh'>
        <div className='staffhome'>
          <div >
            <Link className='link'><UserOutlined className='icon' /></Link>
            <Link className='icon'>
              <BellOutlined className="belloutlined" />
            </Link>
          </div>
          <Typography.Title className='title'>A Company is only as good as the people it keeps</Typography.Title>
        </div>

        <div className='stfcon'>
          <Typography.Text className='profile'>profile</Typography.Text>
          <div>
            <Form className='form'>
              <Form.Item label="Name" name="name" />
              <Form.Item label="Email" name="email" />
              <Form.Item label="Contact-no" name="contactno" />
              <Form.Item label="Branch Name" name="branchname" />
            </Form>
          </div>
        </div>

        <div className='sh1'>
          <Typography.Title className='activity'>Activity</Typography.Title>
          <Button className='newparcel'>New Parcel</Button>
          <Button className='parcelhistory'>Parcel History</Button>
        </div>
        <div className='sh2'>

          <Row className='row'>
            <Typography.Text className='text' >Terms And Condition</Typography.Text>
            <Typography.Paragraph className='para'>every parcel have to deliver  customer without any  delay.</Typography.Paragraph>
            <Typography.Paragraph className='para2'>It Is your compeleted responsibility  if you demage any parcel</Typography.Paragraph>
            <Typography.Paragraph className='para3'>You should be taking a max of 4 leave at a time. (For this leave will be approved if you inform before two weeks and as per your workload.)</Typography.Paragraph>
          </Row>
        </div>
      </div>
    </>
  )
}

export default StaffHome
