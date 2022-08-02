import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({data,title,dataKey}) {

    return (
        <div className="chart">
            <div >
                <h3 className='chartTitle'>{title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#354259" />
                    <Line type="monotone" dataKey={dataKey} stroke="#354259"/>
                    <Tooltip/>
                    <CartesianGrid stroke='#F2EBE9' strokeDasharray="5 5"/>
                </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    )
}
