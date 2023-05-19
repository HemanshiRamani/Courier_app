import { Typography, Table,Button } from 'antd'
import {
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons';
import React from 'react'
import './EditBranch.scss'
import Dashboard from '../Admin/Dashboard/Dashboard';
const EditBranch = () => {
    const columns = [{
      title: "Action",
      key: "action",
      render: () => {
        <div>
          <Button><DeleteOutlined /></Button>
          <Button><EditOutlined /></Button>
        </div>
      }
    },
    {
      title : "BranchName",
      dataIndex :"branchName",
      key:"branchName"
    },
    {
      title:"Address",
      dataIndex:"address",
      key:"address"
    },
    {
      title:"ContatNumber",
      dataIndex:"contatnumber",
      key:"contatnumber"
    },
    {
      title:"E-Mail",
      dataIndex:"E-mail",
      key:"E-mail"
    },
    {
      title:"ZipCode",
      dataIndex:"ZipCode",
      key:"ZipCode"
    }
  ]
  
  return (
    <>
      <div className='add'>
        <div className='EditBranch'>
          <Typography.Title className='Branch'>Branch Details</Typography.Title>
        </div>

        <div className='col'>
    <Table columns={columns} />
       <Dashboard/>
        </div>

      </div>
    </>
  )
}

export default EditBranch
