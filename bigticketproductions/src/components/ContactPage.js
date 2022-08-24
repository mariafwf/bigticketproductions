import React from "react";

import { Helmet } from "react-helmet";

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Big Ticket Productions | Contact</title>
            </Helmet>
            <div className="col-12 align-content-center justify-content-center text-center pb-4"><h1>Contact</h1></div>
            <div className="row">
                <div className="container col-6 text-center align-items-center align-content-center justify-content-center pt-5 pb-5">
                    <div className="container p-5">
                        <div className="container">
                            <div className="row align-items-center align-content-center justify-content-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-envelope m-3" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                <a href="mailto:btp.eboard22@umich.edu" className="main-section m-2">btp.eboard22@umich.edu</a>
                            </div>
                        </div>
                        <div className="row align-items-center align-content-center justify-content-center">
                            <div className="navbar-icons">
                                <a href="https://www.instagram.com/bigticketumich/" target="_blank" rel="noreferrer">
                                    <img src="https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg" alt="" width="50" height="50" className="m-3"></img>
                                </a>
                            </div>
                            <div className="navbar-icons">
                                <a href="https://web.facebook.com/bigticketproductions/" target="_blank" rel="noreferrer">
                                    <img src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png" alt="" width="50" height="50" className="m-3"></img>
                                </a>
                            </div>
                            <div className="navbar-icons">
                                <a href="https://www.linkedin.com/company/big-ticket-productions-umich/" target="_blank" rel="noreferrer">
                                    <img src="https://www.pngkey.com/png/full/550-5502522_linkedin-icon-white-linkedin-white-icon-png.png" alt="" width="50" height="50" className="m-3"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-section container col-6 text-center align-items-center align-content-center justify-content-center pt-5">
                    <div className="container align-items-center align-content-center justify-content-center mr-5 pr-5">
                        <div className="text-center m-4 align-items-center align-content-center justify-content-center pr-5 pt-2 mt-4">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Email Address"></input>
                                </div>
                                <div className="form-group">
                                    <input type="phone" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Phone #"></input>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="pl-5 pr-5 text-center align-items-center align-content-center justify-content-center">
                        <button type="submit" className="home-btn">Submit</button>
                    </div>
                </div>
            </div>
    </>
  );
}
