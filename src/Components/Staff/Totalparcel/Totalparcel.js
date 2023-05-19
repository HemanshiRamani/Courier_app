import { Typography, Table, Image } from 'antd'
import home from "../../image/home.png"
import Link from 'antd/es/typography/Link'
import React from 'react'
import './totalparcel.scss'
const TotalParcel = () => {
  const columns = [{
    title: "RefNo",
    key: "action",
    render: () => {
    }
  },
  {
    title: "ReceiverName",
    dataIndex: "branchName",
    key: "branchName"
  },
  {
    title: "RecevierPhno",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "ParcelStatus",
    dataIndex: "contatnumber",
    key: "contatnumber"
  },
  {
    title: "Deliver Date",
    dataIndex: "E-mail",
    key: "E-mail"
  }
  ]

  return (
    <>
      <div className='add'>
        <div className='EditBranch'>
          <Typography.Title className='Branch'> Parcel Details</Typography.Title>
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

export default TotalParcel
