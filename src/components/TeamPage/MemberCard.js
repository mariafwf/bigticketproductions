/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./team.css";

import Dillon from "../../assets/img/team/dillon.jpeg";
import Avalon from "../../assets/img/team/avalon.jpeg";
import Eli from "../../assets/img/team/eli.jpeg";
import Ava from "../../assets/img/team/ava.jpeg";
import Christian from "../../assets/img/team/christian.jpeg";
import Maria from "../../assets/img/team/maria.jpeg";
import Jackie from "../../assets/img/team/jackie.jpeg";
import Carly from "../../assets/img/team/carly.jpg";
import Thomas from "../../assets/img/team/thomas.jpeg";
import Jocelyn from "../../assets/img/team/jocelyn.jpeg";
import Ella from "../../assets/img/team/ella.jpeg";
import UACLogo from "../../assets/img/team/uac.png";

export {
    Dillon, Avalon, Eli, Ava, Christian, Maria,
    Jackie, Carly, Thomas, Jocelyn, Ella, UACLogo
};

export function MemberCard(props) {
    return (
        <div className="card">
            <img className="card-img rounded mx-auto d-block" src={props.img} alt="Picture of Member"></img>
            <div className="card-body">
                <h2 className="team-name">{props.name}</h2>
                <h2 className="team-pos">{props.position}</h2>
                <div>
                    <div className="team-item">
                        <span className="team-labels">Year</span>
                        <span className="team-description">{props.year}</span>
                    </div>
                    <div className="team-item">
                        <span className="team-labels">Hometown</span>
                        <span className="team-description">{props.hometown}</span>
                        <br></br>
                    </div>
                    <div className="team-item">
                        <span className="team-labels">Major(s)</span>
                        <span className="team-description">{props.majors}</span>
                        <br></br>
                    </div>
                    {props.minors &&
                        <div className="team-item">
                            <span className="team-labels">Minor(s)</span>
                            <span className="team-description">{props.minors}</span>
                            <br></br>
                        </div>
                    }
                    <div className="team-item">
                        <span className="team-labels">Favorite Song</span>
                        <span className="team-description">{props.song}</span>
                        <br></br>
                    </div>
                </div>
                <div className="justify-content-center pt-2">
                    <a href={props.instagram} target="_blank" rel="noreferrer">
                        <img src="https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg"
                            alt="" width="20" height="20" className="m-3"></img>
                    </a>
                    <a href={props.spotify} target="_blank" rel="noreferrer">
                        <img src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
                            alt="" width="20" height="20" className="m-3"></img>
                    </a>
                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <img src="https://www.pngkey.com/png/full/550-5502522_linkedin-icon-white-linkedin-white-icon-png.png"
                            alt="" width="20" height="20" className="m-3"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}