/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export function MemberCard(props) {
    return (
        <div className="card m-2 pl-4 pr-4">
            <img className="card-img rounded mx-auto d-block mt-3" src={props.img} alt="Picture of Member"></img>
            <div className="card-body">
                <h1 className="team-name">{props.name}</h1>
                <h2 className="team-pos mb-1">{props.position}</h2>
                <p>
                    <div className="mb-2">
                        <span className="team-labels mr-2">Year</span>
                        <span className="team-description">{props.year}</span>
                    </div>
                    <div className="mb-2">
                        <span className="team-labels mr-2">Hometown</span>
                        <span className="team-description">{props.hometown}</span>
                        <br></br>
                    </div>
                    <div className="mb-2">
                        <span className="team-labels mr-2">Major(s)</span>
                        <span className="team-description">{props.majors}</span>
                        <br></br>
                    </div>
                    {props.minors &&
                        <div className="mb-2">
                            <span className="team-labels mr-2">Minor(s)</span>
                            <span className="team-description">{props.minors}</span>
                            <br></br>
                        </div>
                    }
                    <div>
                        <span className="team-labels mr-2">Favorite Song</span>
                        <span className="team-description">{props.song}</span>
                        <br></br>
                    </div>
                </p>
                <div className="row justify-content-center pt-2">
                    <div>
                        <a href={props.instagram} target="_blank" rel="noreferrer">
                            <img src="https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg"
                                alt="" width="15" height="15" className="m-3"></img>
                        </a>
                    </div>
                    <div>
                        <a href={props.spotify} target="_blank" rel="noreferrer">
                            <img src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
                                alt="" width="15" height="15" className="m-3"></img>
                        </a>
                    </div>
                    <div>
                        <a href={props.linkedin} target="_blank" rel="noreferrer">
                            <img src="https://www.pngkey.com/png/full/550-5502522_linkedin-icon-white-linkedin-white-icon-png.png"
                                alt="" width="15" height="15" className="m-3"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}