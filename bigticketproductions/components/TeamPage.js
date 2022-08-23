/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Helmet } from 'react-helmet';

function MemberCard(props) {
    return (
        <div class="card m-2 pl-4 pr-4">
        <img class="card-img rounded mx-auto d-block mt-3" src={props.img} alt="Picture of Member"></img>
        <div class="card-body">
            <h1 class="team-name">{props.name}</h1>
            <h2 class="team-pos mb-1">{props.position}</h2>
            <p>
            <div class="mb-2"><span class="team-labels mr-2">Year</span><span
                    class="team-description">{props.year}</span></div>
            <div class="mb-2"><span class="team-labels mr-2">Hometown</span><span
                    class="team-description">{props.hometown}</span><br></br></div>
            <div class="mb-2"><span class="team-labels mr-2">Major(s)</span><span
                    class="team-description">{props.majors}</span><br></br></div>
            {props.minors &&
                <div class="mb-2"><span class="team-labels mr-2">Minor(s)</span><span class="team-description">{props.minors}</span><br></br></div>
            }
            <div><span class="team-labels mr-2">Favorite Song</span><span class="team-description">{props.song}</span><br></br></div>
            </p>
            <div class="row justify-content-center pt-2">
                <div>
                    <a href={props.instagram} target="_blank" rel="noreferrer">
                        <img src="https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg"
                            alt="" width="15" height="15" class="m-3"></img>
                    </a>
                </div>
                <div>
                    <a href={props.spotify} target="_blank" rel="noreferrer">
                        <img src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
                            alt="" width="15" height="15" class="m-3"></img>
                    </a>
                </div>
                <div>
                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <img src="https://www.pngkey.com/png/full/550-5502522_linkedin-icon-white-linkedin-white-icon-png.png"
                            alt="" width="15" height="15" class="m-3"></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
  }

export function TeamPage() {

  return (
    <>
    <Helmet>
            <title>Big Ticket Productions | Team</title>
    </Helmet>
    <div class="main-section container col-12 text-center justify-content-center">
        <h1>Team</h1>
        <div class="row container mx-auto mt-4">
            <MemberCard name="Dillon Hong" img="../img/board/dillon.jpeg" position="President" year="Senior" hometown="Rochester Hills, MI" majors="Business" song="Apple Pie -
                Travis Scott" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Avalon Lebenthal" img="../img/board/avalon.jpeg" position="VP of Operations" year="Junior" hometown="Pawling, NY" majors="Astronomy" minors="Biology
                + Earth Sciences" song="XO - Eden" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Eli Gordon" img="../img/board/eli.jpeg" position="VP of Marketing" year="Senior" hometown="Campbell, CA" majors="Sociology" minors="Performing Arts Management + Business"
                song="Ojitos Lindos - Bad Bunny & Bomba Estéreo" instagram="#" spotify="#" linkedin="#"></MemberCard>
        </div>
        <div class="row container mx-auto mt-4">
            <MemberCard name="Ava Meesseman" img="../img/board/ava.jpeg" position="VP of Finance" year="Sophomore" hometown="Ferndale, MI" majors="Biopsychology, Cognition, and Neuroscience"
                song="The Other Side of Paradise - Glass Animals" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Christian Sauer" img="../img/board/christian.jpeg" position="Director of Talent" year="Junior" hometown="Winchester, MA" majors="Economics + Business"
                minors="Music" song="Devil in a New Dress - Kanye West" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Maria Figueiredo" img="../img/board/maria.jpeg" position="Director of Internal Relations" year="Sophomore" hometown="São Paulo, Brazil"
                    majors="Computer Science + Cognitive Science" song="For Emma - Bon Iver" instagram="https://www.instagram.com/mafefig/"
                    spotify="https://open.spotify.com/user/mafefigueiredo?si=d055d283126f4012" linkedin="https://www.linkedin.com/in/mariafig/"></MemberCard>
        </div>
        <div class="row container mx-auto mt-4">
            <MemberCard name="Jackie Jurasek" img="../img/board/jackie.jpeg" position="Director of Member Engagement" year="Sophomore" hometown="Ann Arbor, MI" majors="Nursing"
                        song="Brazil - Declan McKenna" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Carly Gesell" img="../img/board/carly.jpeg" position="Director of Digital Marketing" year="Sophomore" hometown="Grosse Point, MI" majors="Communication and Media"
                        minors="Graphic Design" song="I Did Something Bad - Taylor Swift" instagram="#" spotify="#" linkedin="#"></MemberCard>
            <MemberCard name="Thomas Cuddy" img="../img/board/thomas.jpeg" position="Director of Ground Marketing" year="Sophomore" hometown="Alexandria, VA" majors="Mechanical Engineering"
                        song="Human - The Killers" instagram="#" spotify="#" linkedin="#"></MemberCard>
        </div>
        <div class="row container mx-auto mt-4">
            <MemberCard name="Jocelyn Brown" img="../img/board/jocelyn.jpeg" position="Director of External Relations" year="Senior" hometown="Canton, MI"
                        majors="Film, Television, and Media" song="What It Is - Amber Mark" instagram="#" spotify="#" linkedin="#"></MemberCard>           
            <MemberCard name="Ella Canavan" img="../img/board/ella.jpeg" position="Director of Sponsorship" year="Junior" hometown="Buffalo, NY"
                        majors="Sport Management" song="I Know The End - Phoebe Bridgers" instagram="#" spotify="#" linkedin="#"></MemberCard>  
            <div class="pseudo-card m-2 pl-4 pr-4 pt-5 mt-lg-5">
                <img class="rounded mx-auto d-block mt-lg-5" src="../img/uac.png" alt="UAC" width="100" height="40"></img>
                <div class="card-body">
                    <p>
                    <div class="mb-lg-7 mb-sm-3 mb-md-4">
                        <span class="pseudo-description mr-2">Big Ticket Productions is a member of the
                            University Activities Center (UAC), a student-run programming organization sponsored by the
                            Center for Campus Involvement (CCI).
                        </span>
                    </div>
                    </p>
                            <div class="row justify-content-center pt-2">
                                <div>
                                    <a id="learn-more" href="https://uac.umich.edu/" target="_blank" rel="noreferrer">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}