import { Typography, } from 'antd'
import Link from 'antd/es/typography/Link'
import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./ReportDetail.scss"


const ReportDetail = () => {
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
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default ReportDetail
