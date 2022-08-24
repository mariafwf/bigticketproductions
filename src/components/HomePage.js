import React from "react";

import { Helmet } from "react-helmet";

export default function HomePage() {

    return (
        <>
        <Helmet>
            <title>Big Ticket Productions | Team</title>
        </Helmet>
        <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="motto">
          <h1 id="motto-text">
            <span>Your</span>
            <span>Campus.</span><br/>
            <span>Your</span>
            <span>Entertainment.</span></h1>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./img/pinksweats.jpeg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/bigsean3.jpeg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/macdemarco.jpeg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/bigsean2.jpeg"
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/blackbear.jpeg"
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div id="about" className="main-section container col-12 text-center">
          <h1 className="pt-5 revealUp">About</h1>
          <div className="container">
          <p className="pl-lg-5 pl-md-4 pl-sm-1
                    pr-lg-5 pr-md-4 pr-sm-1
                    pt-3 pb-3
                    ml-lg-5 ml-md-4 ml-sm-3
                    mr-lg-5 mr-md-4 mr-sm-3 revealUp">
            Big Ticket Productions is the University of Michigan's premier <span>
            concert-production organization. </span> Our mission is to bring
            <span>quality, big name entertainment </span> to campus that students want to see and can enjoy
            at an affordable rate. In the past, BTP has brought performers such as <span> Glass Animals</span>,<span>
             Pinksweat$</span>,<span> Daya</span>,<span> Grady</span>,<span> Chance The Rapper</span>,<span> Lupe Fiasco</span>,<span> We
            The Kings</span>,<span> Rich the Kid</span>,<span> Lil Dicky </span> and<span>  ARIZONA </span>to
            Hill Auditorium for some of the largest music events on the University
            of Michigan's campus.
            These events are are also <span> open to the
            public, </span> although the group's management is run solely by Michigan
            students. <br /><br />
            Interested in learning more about the entertainment industry and networking
            with other concert lovers?<br /> <span>Get involved today!</span> 
          </p>
          <a
            type="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_xPpdFbFthnXte3FKrCNy5SQZnUghQUqj_92rzPQJNMZIkA/viewform"
            target="_blank"
            className="home-btn" rel="noreferrer"
            >Join our mailing list</a
          >
          <a
            type="button"
            href="https://maizepages.umich.edu/organization/bigticketproductions"
            target="_blank"
            className="home-btn" rel="noreferrer"
            >Check us out on MaizePages</a
          >
        </div>
      </div>
      </>
    );
}