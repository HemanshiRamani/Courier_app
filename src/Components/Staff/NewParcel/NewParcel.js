import { Typography, Table, Image } from 'antd'
import home from "../../image/home.png"
import Link from 'antd/es/typography/Link'
import React from 'react'
import './newparcel.scss'
const NewParcel = () => {
  const columns = [{
    title: "RefNo",
    key: "action",
    render: () => {
    }
  },
  {
    title: "ParcelStatus",
    dataIndex: "branchName",
    key: "branchName"
  },
  {
    title: "ReceiverName",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "ReceiverAddress",
    dataIndex: "contatnumber",
    key: "contatnumber"
  },
  {
    title: "RecevierPhno",
    dataIndex: "E-mail",
    key: "E-mail"
  },
  {
    title: "Recevie Date",
    dataIndex: "ZipCode",
    key: "ZipCode"
  }
  ]

  return (
    <>
      <div className='add'>
        <div className='EditBranch'>
          <Typography.Title className='Branch'>New Parcel Data</Typography.Title>
          <div className='imge' >
            <Link >
              <Image src={home} className="Home" />
            </Link>
          </div>

        </div>

        <div className='col'>
          <Table columns={columns} />
        </div>
      </div>
    </>
  )
}

export default NewParcel
