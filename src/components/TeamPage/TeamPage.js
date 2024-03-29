import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./team.css";

import { Helmet } from "react-helmet";
import {
  MemberCard, Dillon, Avalon, Eli, Ava, Christian, Maria,
  Jackie, Carly, Thomas, Jocelyn, Ella, UACLogo
} from "./MemberCard";

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Big Ticket Productions | Team</title>
      </Helmet>
      <div className="team-container row">
        <h1>Team</h1>
        <MemberCard
          name="Dillon Hong"
          img={Dillon}
          position="President"
          year="Senior"
          hometown="Rochester Hills, MI"
          majors="Business"
          song="Apple Pie - Travis Scott"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Avalon Lebenthal"
          img={Avalon}
          position="VP of Operations"
          year="Junior"
          hometown="Pawling, NY"
          majors="Astronomy"
          minors="Biology + Earth Sciences"
          song="XO - Eden"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Eli Gordon"
          img={Eli}
          position="VP of Marketing"
          year="Senior"
          hometown="Campbell, CA"
          majors="Sociology"
          minors="Performing Arts Management + Business"
          song="Ojitos Lindos - Bad Bunny & Bomba Estéreo"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Ava Meesseman"
          img={Ava}
          position="VP of Finance"
          year="Sophomore"
          hometown="Ferndale, MI"
          majors="Biopsychology, Cognition, and Neuroscience"
          song="The Other Side of Paradise - Glass Animals"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Christian Sauer"
          img={Christian}
          position="Director of Talent"
          year="Junior"
          hometown="Winchester, MA"
          majors="Economics + Business"
          minors="Music"
          song="Devil in a New Dress - Kanye West"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Maria Figueiredo"
          img={Maria}
          position="Director of Internal Relations"
          year="Sophomore"
          hometown="São Paulo, Brazil"
          majors="Computer Science + Cognitive Science"
          song="For Emma - Bon Iver"
          instagram="https://www.instagram.com/mafefig/"
          spotify="https://open.spotify.com/user/mafefigueiredo?si=d055d283126f4012"
          linkedin="https://www.linkedin.com/in/mariafig/"
        ></MemberCard>
        <MemberCard
          name="Jackie Jurasek"
          img={Jackie}
          position="Director of Member Engagement"
          year="Sophomore"
          hometown="Ann Arbor, MI"
          majors="Nursing"
          song="Brazil - Declan McKenna"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Carly Gesell"
          img={Carly}
          position="Director of Digital Marketing"
          year="Sophomore"
          hometown="Grosse Pointe, MI"
          majors="Communication and Media"
          minors="Graphic Design"
          song="I Did Something Bad - Taylor Swift"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Thomas Cuddy"
          img={Thomas}
          position="Director of Ground Marketing"
          year="Sophomore"
          hometown="Alexandria, VA"
          majors="Mechanical Engineering"
          song="Human - The Killers"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Jocelyn Brown"
          img={Jocelyn}
          position="Director of External Relations"
          year="Senior"
          hometown="Canton, MI"
          majors="Film, Television, and Media"
          song="What It Is - Amber Mark"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <MemberCard
          name="Ella Canavan"
          img={Ella}
          position="Director of Sponsorship"
          year="Junior"
          hometown="Buffalo, NY"
          majors="Sport Management"
          song="I Know The End - Phoebe Bridgers"
          instagram="#"
          spotify="#"
          linkedin="#"
        ></MemberCard>
        <div className="pseudo-card">
          <img
            className="rounded mx-auto d-block logo"
            src={UACLogo}
            alt="UAC Logo"
            width="200"
            height="80"
          ></img>
          <div className="card-body">
            <p>
              <div>
                <span className="pseudo-description">
                  Big Ticket Productions is a member of the University
                  Activities Center (UAC), a student-run programming
                  organization sponsored by the Center for Campus Involvement
                  (CCI).
                </span>
              </div>
            </p>
            <div className="justify-content-center">
                <a href="https://uac.umich.edu/" target="_blank" rel="noreferrer">
                  Learn more
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
