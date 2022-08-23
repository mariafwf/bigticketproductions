import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import MobileNavbar from './components/MobileNavbar';
import DesktopNavbar from './components/DesktopNavbar';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            {useMediaQuery('(min-width:577px)') && (<DesktopNavbar />)}
            {useMediaQuery('(max-width:576px)') && (<MobileNavbar />)}`
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/team' element={<TeamPage />} />
            </Routes>
            <Footer />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
            <script src="js/main.js"></script>
            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossorigin="anonymous"
            ></script>
        </BrowserRouter>
    )
}
