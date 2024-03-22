import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainMenu.css';
import { Link } from 'react-router-dom';
import Admindash from './Admindash';

function MainMenu() {
  return (
    <>    
  
    <div className="area">
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-film fa-2x"></i>
              <span className="nav-text">Admin Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-book fa-2x"></i>
              <span className="nav-text">Bookings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-cogs fa-2x"></i>
              <Link to ='/table'><span className="nav-text">History</span></Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker fa-2x"></i>
             <Link to='/add'> <span className="nav-text">Add Bookings</span></Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info fa-2x"></i>
              <Link to='/contact'><span className="nav-text">Available Boats</span></Link>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default MainMenu;
