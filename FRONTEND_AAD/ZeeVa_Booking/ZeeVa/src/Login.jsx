import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const validUsername = 'admin';
  const validPassword = 'password';

  function validate(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorEle = document.getElementById('error');
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
    <div id="main">
      <div id="ccontainer">
        <div id="ddynamic">
          <div id="header">
            <h1>ZeeVa Booking</h1>
            <p></p>
            <p className="description">Float Away to Paradise</p>
          </div>
          <form id="login-form" autoComplete="off" onSubmit={validate}>
            <p id="error"></p>
            <input type="text" id="username" name="username" placeholder="Username" required /><br />
            <input type="password" id="password" name="password" placeholder="Password" required /><br />
            <Link to='/admindash'>
            <input type="submit" id="login-button" value="Log In" /></Link><br />
          </form>
          <Link to='/signup'>
          <button type="button" id="signup-button">Sign Up</button></Link><br />
          <a href="#">Forgot your password?</a><br />
        </div>
      </div>
    </div>
  );
}

export default Login;
