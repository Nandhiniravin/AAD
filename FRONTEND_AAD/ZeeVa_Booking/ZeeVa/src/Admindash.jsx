import React from 'react';
import './Admindash.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import MainMenu from './MainMenu';
function Admindash() {
    const data = [
        { name: 'Total Boats', total: 300, booked: 120}
    ];

    return (
        <div>
            <MainMenu/>
      <div className='dashboard-container'>
      
        <main className='main-container'>
       
            <div className='main-title'>
            
             
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL BOATS</h3>
                        
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>BOOKED</h3>
                        
                    </div>
                    <h1>120</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CANCELLED</h3>
                       
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL AMOUNT</h3>
                        
                    </div>
                    <h1>42,000</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" name="Total Boats" />
                        <Bar dataKey="booked" fill="#82ca9d" name="Booked" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="80%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Boats" />
                        <Line type="monotone" dataKey="booked" stroke="#82ca9d" name="Booked" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            
        </main>
        </div>
        </div>
       
    );
}

export default Admindash;