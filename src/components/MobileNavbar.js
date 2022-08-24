import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

import { Link } from 'react-router-dom';

export default function MobileNavbar() {
  return (
    <nav className="container sticky-top navbar-mobile p-3">
      <div
        className="row navbar-mobile-contents d-flex align-content-center justify-content-center"
      >
        <div className="m-2">
          <a id="navbar-title" className="text-light m-3" href="index.html">
            <img
              id="navbar-logo"
              src="img/logo.jpeg"
              width="55"
              height="40"
              className="d-inline-block pr-3"
              alt="Logo"
            />
            <span id="logo-text" className="pt-3">Big Ticket Productions</span>
          </a>
        </div>
      </div>
      <div className="inner d-flex align-items-center justify-content-center">
        <ul className="nav nav-pills text-center">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}