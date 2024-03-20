import React, { useState } from 'react';
import './BookingTable.css';

function BookingTable() {
  const [boatName, setBoatName] = useState('');
  const [userId, setUserId] = useState('');
  const [noOfPersons, setNoOfPersons] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [bookings, setBookings] = useState([]);

  function validate(event) {
    event.preventDefault();
    if (!boatName.trim() || !userId.trim() || !noOfPersons.trim() || !fromDate || !toDate) {
      alert("Please fill in all fields");
    } else {
      const newBooking = {
        id: new Date().getTime(),
        boatName,
        userId,
        noOfPersons,
        fromDate,
        toDate,
      };

      setBookings([...bookings, newBooking]);

      // Clear input fields after submission
      setBoatName('');
      setUserId('');
      setNoOfPersons('');
      setFromDate('');
      setToDate('');
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="dynamic">
          <div className="header">
       
          </div>
        </div>
      </div>
      <div className="booking-table">
        <h2 className='Nan'>Bookings History</h2>
        <table>
          <thead>
            <tr>
              <th id="boatname-column">Boat Name</th>
              <th id="userid-column">User ID</th>
              <th id="nopersons-column">Number of Persons</th>
              <th id="fromdate-column">From Date</th>
              <th id="todate-column">To Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.boatName}</td>
                <td>{booking.userId}</td>
                <td>{booking.noOfPersons}</td>
                <td>{booking.fromDate}</td>
                <td>{booking.toDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingTable;
