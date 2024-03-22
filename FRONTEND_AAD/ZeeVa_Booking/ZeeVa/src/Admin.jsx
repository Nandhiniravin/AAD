import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
  const validUsername = 'admin';
  const validPassword = 'password';

  function validate(event) {
    const username = document.getElementById('Admin-username').value;
    const password = document.getElementById('Admin-password').value;
    const errorEle = document.getElementById('Admin-error');
    const errorMSG = "Please check your username or password and try again.";
    const successMSG = "Login successful!";

    if (username === validUsername && password === validPassword) {
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
    <div id="Admin-main">
      <div id="Admin-container">
        <div id="Admin-dynamic">
          <div id="Admin-header">
            <h1>ZeeVa Booking</h1>
            <p></p>
            <p className="Admin-description">Float Away to Paradise</p>
          </div>
          <form id="Admin-login-form" autoComplete="off" onSubmit={validate}>
            <p id="Admin-error"></p>
            <input type="text" id="Admin-username" name="Admin-username" placeholder="Username" required /><br />
            <input type="password" id="Admin-password" name="Admin-password" placeholder="Password" required /><br />
            <Link to='/admindash'>
            <input type="submit" id="Admin-login-button" value="Log In" /></Link><br />
          </form>
          <Link to='/signup'>
          <button type="button" id="Admin-signup-button">Sign Up</button></Link><br />
          <a href="#">Forgot your password?</a><br />
        </div>
      </div>
    </div>
  );
}

export default Admin;
