import React from 'react'
import { Link } from 'react-router-dom'
import "./Profil.scss"
import profile from "../../../Assets/Img/profile/profil.svg"
import person from "../../../Assets/Img/person.svg"
import born from "../../../Assets/Img/profile/born.svg"
import ProfileNavbar from './ProfileNavbar'
import ProfileLine from './ProfileLine'


function Profile() {
    return (
        <div className='site-profile'>
            <div className="profile">
                <div className="profile__head">
                    <div>
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        <span>Bobur</span>
                        <p>1,070 Tweets</p>
                    </div>
                </div>
                <div className="profile__background">
                    <img src={profile} alt="profile" />
                </div>
                <div className="profile__edit">
                    <div className="profile__edit-head">
                        <img src={person} alt="person" width={"130px"} />
                    </div>
                    <button className='profile__edit-btn'>
                        Edit profile
                    </button>
                    <div className="profile__edit-context">
                        <h3>Bobur</h3>
                        <p className='email'>@bobur_mavlonov</p>
                        <p className='text'>
                            UX&UI designer at 
                            <Link className='link' to={"https://github.com/tuit212/twitter"}>
                                 @abutechuz
                            </Link>
                        </p>
                        <ul className='profile__list'>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Mashag’daman</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-link"></i>
                                <span>t.me/boburjon_mavlonov</span>
                            </li>
                            <li>
                                <img src={born} alt="born" width={"19px"} />
                                <span>Born November 24, 2000</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>Joined May 2020</span>
                            </li>
                        </ul>
                        <ul className='profile__following'>
                            <li>
                                <b>67</b>
                                <span>Following</span>
                            </li>
                            <li>
                                <b>47</b>
                                <span>Followers</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ProfileNavbar/>
                <ProfileLine/>
            </div>
        </div>
    )
}

export default Profile
