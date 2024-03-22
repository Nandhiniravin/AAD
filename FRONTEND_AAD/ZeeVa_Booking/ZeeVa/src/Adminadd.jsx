import React, { useState } from 'react';


function Adminadd() {
  const [boatName, setBoatName] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  function validate(event) {
    event.preventDefault();
    if (!boatName.trim()) {
      setError("Boat Name cannot be empty");
    } else if (!userId.trim()) {
      setError("User ID cannot be empty");
    } else {
      setError('');
    }
  }

  return (
    <div id="mainn">
      <div id="containerr">
        <div id="dynamicc">
          <div id="headerr">
            <h1>Add Booking Details</h1>
          </div>
          <form id="booking-form" autoComplete="off" onSubmit={validate}>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              id="BoatName"
              name="BoatName"
              placeholder="Boat Name"
              required
              value={boatName}
              onChange={(e) => setBoatName(e.target.value)}
            /><br />
            <input
              type="text"
              id="UserId"
              name="UserId"
              placeholder="Persons Occupy"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            /><br />
            <input
              type="number"
              id="NoFPersons"
              name="NoFPersons"
              placeholder="Number of Persons"
              required
            /><br />
            <input
              type="date"
              id="From"
              name="From"
              placeholder="From Date"
              required
            /><br />
            <input
              type="date"
              id="To"
              name="To"
              placeholder="To Date"
              required
            /><br />
            <button type="button" id="sign-button">Submit</button><br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminadd;
