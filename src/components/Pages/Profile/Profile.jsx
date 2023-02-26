import React from 'react'
import "./Profil.scss"
import profile from "../../../Assets/Img/profile/profil.svg"
import person from "../../../Assets/Img/person.svg"


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
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
