import React from "react";

import { Helmet } from "react-helmet";

export default function GalleryPage() {
  return (
    <>
    <Helmet>
        <title>Big Ticket Productions | Gallery</title>
    </Helmet>
    <div className="main-section container col-12 text-center justify-content-center">
            <h1>Gallery</h1>
            <div className="container">
                <div className="row text-center pt-3">
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2022</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">PinkSweat$</button>
                        <button type="button" className="home-btn m-3">Grady</button>
                        </div>
                    </div>
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2021</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">Glass Animals</button>
                        <button type="button" className="home-btn m-3">Daya</button>
                        </div>
                    </div>
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2019</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">ARIZONA</button>
                        <button type="button" className="home-btn m-3">Jalen Santoy</button>
                        <button type="button" className="home-btn m-3">Rich The Kid</button>
                        </div>
                    </div>
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2018</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">blackbear</button>
                        <button type="button" className="home-btn m-3">Roy Wood$</button>
                        </div>
                    </div>
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2017</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">Mac DeMarco</button>
                        <button type="button" className="home-btn m-3">Two Friends</button>
                        </div>
                    </div>
                    <div className="gallery p-10 m-2 text-center">
                        <h3 width="100%" className="gallery-year p-2">2016</h3>
                        <div className="btn-group-vertical align-content-center align-items-center">
                        <button type="button" className="home-btn m-3">Big Sean</button>
                        <button type="button" className="home-btn m-3">Lil Dicky</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
}
