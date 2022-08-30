import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./gallery.css";

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { PinkSweats } from "./galleries/PinkSweats";
import { Grady } from "./galleries/Grady";
import { GlassAnimals } from "./galleries/GlassAnimals";
import { Daya } from "./galleries/Daya";
import { Arizona } from "./galleries/Arizona";
import { RichTheKid } from "./galleries/RichTheKid";
import { Blackbear } from "./galleries/Blackbear";
import { RoyWoods } from "./galleries/RoyWoods";
import { MacDeMarco } from "./galleries/MacDeMarco";
import { TwoFriends } from "./galleries/TwoFriends";
import { BigSean } from "./galleries/BigSean";
import { LilDicky } from "./galleries/LilDicky";

export default function GalleryPage() {
    const navigate = useNavigate();

    const changeGallery = (route) => {
        navigate(route);
    } 

  return (
    <BrowserRouter>
    <Helmet>
        <title>Big Ticket Productions | Gallery</title>
    </Helmet>
    <div className="container col-12 text-center">
            <h1>Gallery</h1>
            <div className="container">
                <div className="text-center d-flex">
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2022</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/pink')}>PinkSweat$</button>
                        <button type="button" className="btn" onClick={changeGallery('/grady')}>Grady</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2021</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/glass')}>Glass Animals</button>
                        <button type="button" className="btn" onClick={changeGallery('/daya')}>Daya</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2019</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/arizona')}>ARIZONA</button>
                        <button type="button" className="btn" onClick={changeGallery('/rich')}>Rich The Kid</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2018</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/blackbear')}>blackbear</button>
                        <button type="button" className="btn" onClick={changeGallery('/roy')}>Roy Wood$</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2017</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/mac')}>Mac DeMarco</button>
                        <button type="button" className="btn" onClick={changeGallery('/twofriends')}>Two Friends</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2016</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('/bigsean')}>Big Sean</button>
                        <button type="button" className="btn" onClick={changeGallery('/lildicky')}>Lil Dicky</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/pink' element={<PinkSweats />} />
            <Route path='/grady' element={<Grady />} />
            <Route path='/glass' element={<GlassAnimals />} />
            <Route path='/daya' element={<Daya />} />
            <Route path='/arizona' element={<Arizona />} />
            <Route path='/rich' element={<RichTheKid />} />
            <Route path='/blackbear' element={<Blackbear />} />
            <Route path='/roy' element={<RoyWoods />} />
            <Route path='/mac' element={<MacDeMarco />} />
            <Route path='/twofriends' element={<TwoFriends />} />
            <Route path='/bigsean' element={<BigSean />} />
            <Route path='/lildicky' element={<LilDicky />} />
        </Routes>
        </BrowserRouter>
  );
}
