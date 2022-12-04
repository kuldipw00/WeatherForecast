

import React, {useState, useEffect} from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ReferenceLine
} from 'recharts';
  
// Sample chart data

function WeatherChart({data,current}) {
    
   console.log("currentTemp",current)

    return (
        <>
            <h1 className="text-heading">
                Weather forecast chart
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={data.forecast} margin={{ right: 300 }}>
                    <CartesianGrid />
                   
                    <XAxis dataKey="time" 
                        interval={'preserveStartEnd'} />
                    <YAxis label={{ value: "Temp_f",angle:'-90',dx:-20}} type="number" domain={['auto',68]} allowDataOverflow={true} dataKey="temp_f"/>
                    <Legend />
                    <Tooltip/>
                    <Line dataKey="temp_f"
                        stroke="blue" activeDot={{ r: 8 }} />
                    <ReferenceLine label={{value:`Current temp = ${current}f`,dy:10}} y={current} stroke='red' />
                    {/* <Line dataKey="temp_f"
                        stroke="red" activeDot={{ r: 8 }} /> */}
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
  
export default WeatherChart;