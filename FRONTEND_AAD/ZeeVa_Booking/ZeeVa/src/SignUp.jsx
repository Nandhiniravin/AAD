import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const validUsername = 'admin';
  const validPassword = 'password';

  function validate(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const errorEle = document.getElementById('error');
    const errorMSG = "Please check your username or password and try again.";
    const successMSG = "Login successful!";

    const phoneNumberRegex = /^[01]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (username === validUsername && password === validPassword && phoneNumberRegex.test(phoneNumber)) {
      errorEle.style.color = "green";
      errorEle.innerHTML = successMSG;
      event.preventDefault();
    } else {
      errorEle.style.color = "red";
      errorEle.innerHTML = errorMSG;
      event.preventDefault();
    }
  }

  return (
    <div id="main">
      <div id="container">
        <div id="dynamic">
          <div id="header">
            <h1>ZeeVa Booking</h1>
            <p className="description">Float Away to Paradise</p>
          </div>
          <form id="login-form" autoComplete="off" onSubmit={validate}>
            <p id="error"></p>
            <input type="text" id="FirstName" name="Firstname" placeholder="First Name" required /><br />
            <input type="text" id="LastName" name="LastName" placeholder="Last Name" required /><br />
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required /><br />
            <input type="email" id="email" name="email" placeholder="Email ID " required /><br />
            <input type="password" id="password" name="password" placeholder="Password" required /><br />
          </form>
          <Link to='/'>
          <button type="button" className='Register'>Register</button> </Link><br />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
