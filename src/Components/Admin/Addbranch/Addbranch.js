import React from 'react'
import './addbranch.scss'
import { Form, Input, Typography, List, Button } from 'antd'
import Dashboard from '../Dashboard/Dashboard'


const Addbranch = () => {

    return (

        <>
            <div className='Addbranch'>
                <Form className='Form'  >
                    <Typography.Title className='title'>Add Branch Detail</Typography.Title>

                    <List className='list'>
                        <Form.Item className='branchname' label="Branch Name">
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className='li'>
                        <Form.Item label="Branch Address" className='BranchAddress'>
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className='Address'>
                        <Form.Item label="Contact Number" className='ContactNumber'>
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className='bemail'>
                        <Form.Item label=" Branch Email" className=' BranchEmail'>
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className='bcity'>
                        <Form.Item label="City" className='City'>
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className='bzip'>
                        <Form.Item label="Zip Code" className='ZipCode'>
                            <Input type='text' className='input' />
                        </Form.Item>
                    </List>

                    <List className="button">
                        <Button type='submit' className='btn' >Add Branch</Button>
                    </List>


                </Form>
                <Dashboard />
            </div>
        </>
    )
}

export default Addbranch

