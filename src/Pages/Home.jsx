import React from 'react'
import "./home.css"
import Content from '../component/Future/Content'
import Chart from '../component/chart/Chart'
import {data} from "../clintdetails"
import Newuser from '../component/userdetails/newuser/Newuser'
import Usertransecation from '../component/userdetails/usertranscation/Usertransecation'

export default function Home() {
  return (
    <>
    <div className='futured'>
      <Content />
      <Chart data={data} dataKey="Points" title="User Analytics" />
      <div className='Userdetails'>
        <Newuser/>
        <Usertransecation/>
      </div>
    </div>
    
    </>
  )
}
