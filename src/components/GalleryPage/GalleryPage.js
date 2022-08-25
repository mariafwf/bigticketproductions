import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./gallery.css";

import { Helmet } from "react-helmet";
import { Gallery } from "./Gallery";

export default function GalleryPage() {
    const [currentShow, setCurrentShow] = useState('');

    function changeGallery(show) {
        setCurrentShow(show);
    }

  return (
    <>
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
                        <button type="button" className="btn" onClick={changeGallery('pink')}>PinkSweat$</button>
                        <button type="button" className="btn" onClick={changeGallery('grady')}>Grady</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2021</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('glass')}>Glass Animals</button>
                        <button type="button" className="btn" onClick={changeGallery('daya')}>Daya</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2019</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('arizona')}>ARIZONA</button>
                        <button type="button" className="btn" onClick={changeGallery('rich')}>Rich The Kid</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2018</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('blackbear')}>blackbear</button>
                        <button type="button" className="btn" onClick={changeGallery('roy')}>Roy Wood$</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2017</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('mac')}>Mac DeMarco</button>
                        <button type="button" className="btn" onClick={changeGallery('twofriends')}>Two Friends</button>
                        </div>
                    </div>
                    <div className="gallery">
                        <h3 width="100%" className="gallery-year">2016</h3>
                        <div className="align-items-center">
                        <button type="button" className="btn" onClick={changeGallery('bigsean')}>Big Sean</button>
                        <button type="button" className="btn" onClick={changeGallery('lildicky')}>Lil Dicky</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Gallery current={currentShow} />
    </>
  );
}
