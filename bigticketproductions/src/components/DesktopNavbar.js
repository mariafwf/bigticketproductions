import React from 'react';

import { Link } from 'react-router-dom';

export default function DesktopNavbar() {
  return (
    <nav className="navbar sticky-top navbar-desktop">
      <div className="col-2">
        <a id="navbar-title" className="navbar-brand text-light" href="index.html">
          <img
            id="navbar-logo"
            src="img/logo.jpeg"
            width="65"
            height="50"
            className="d-inline-block pr-3"
            alt="Logo"
          />
          <span id="logo-text" className="pt-1">Big Ticket Productions</span>
        </a>
      </div>
      <div className="col-10 d-flex justify-content-end align-items-end">
        <ul className="nav nav-pills text-center align-items-center">
        <li className="nav-item">
            <Link className="nav-link text-light" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" href="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" href="/contact">Contact</Link>
          </li>
          <li className="navbar-icons">
            <a href="https://www.instagram.com/bigticketumich/" target="_blank" rel="noreferrer">
              <img
                src="https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg"
                alt=""
                width="20"
                height="20"
                className="m-3"
              />
            </a>
          </li>
          <li className="navbar-icons">
            <a
              href="https://web.facebook.com/bigticketproductions/"
              target="_blank" rel="noreferrer"
            >
              <img
                src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png"
                alt=""
                width="20"
                height="20"
                className="m-3"
              />
            </a>
          </li>
          <li className="navbar-icons">
            <a
              href="https://www.linkedin.com/company/big-ticket-productions-umich/"
              target="_blank" rel="noreferrer"
            >
              <img
                src="https://www.pngkey.com/png/full/550-5502522_linkedin-icon-white-linkedin-white-icon-png.png"
                alt=""
                width="20"
                height="20"
                className="m-3"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}