import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileNavbar from './components/MobileNavbar';

import useMediaQuery from '@mui/material/useMediaQuery';
import DesktopNavbar from '../components/DesktopNavbar';
import { HomePage } from '../components/HomePage';
import { TeamPage } from '../components/TeamPage';

export default function App() {
  return (
    <BrowserRouter>
        {useMediaQuery('(min-width:577px)') && (<DesktopNavbar />)}
        {useMediaQuery('(max-width:576px)') && (<MobileNavbar />)}`
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<TeamPage />} />
        </Routes>
    </BrowserRouter>
  )
}
