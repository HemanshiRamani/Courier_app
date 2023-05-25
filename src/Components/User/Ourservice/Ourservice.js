import { Typography, Row, Col, Image, List } from 'antd';
import React from 'react'
import bg from "../../image/bg.jpg";
import "./ourservice.scss";

const Ourservice = () => {
  return (
   <>
    <div className='service'>
        <div className='our'>
        <Typography.Title className='t1'>HOW DOES OUR COMPANY</Typography.Title>
        <Typography.Title className='t2'>PROVIDE SERVICES?</Typography.Title>
        </div>

        <div className='bg'>
        <Row justify="space-evenly">
          <Col>
            <Image src={bg} alt="bg" className="img1" />
          </Col>
          </Row>
        </div>

        <div className='service2'>
            <Row justify="space-evenly">
                <Col style={{ display: "flex", alignItems: "center" }}>
                    <div className='row'>
                    <List className='list'>
                        <List.Item className='item'>Courier service refers to the fast or quick, door to door pickup and delivery service for goods or documents. It can be local or international.</List.Item>
                    </List>
                    <List className='list'>
                        <List.Item className='item'> A company that provides such delivery services is called a courier company.</List.Item>
                    </List>
                    <List className='list'>
                        <List.Item className='item'> A courier company hires people to provide their services. Such a person hired by the courier service company is called a courier.</List.Item>
                    </List>
                    <List className='list'>
                        <List.Item className='item'>  A courier is an individual who is responsible for the safe exchange or delivery of items between two or more parties.</List.Item>
                    </List>
                    <List className='list'>
                        <List.Item className='item'>A courier company hires people to provide their services. Such a person hired by the courier service company is called a courier.</List.Item>
                    </List>
                    </div>
                </Col>
            </Row>
        </div>
    </div>

   </>
  )
}

export default Ourservice