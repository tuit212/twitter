import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileNavbar.scss"

function ProfileNavbar() {
    return (
        <div className='profileNavbar'>
            <NavLink to={"/profile"} className='profile__navbar'>
                Tweets
            </NavLink>
            <NavLink to={"/profile/tweets_replies"} className='profile__navbar'>
                Tweets & replies
            </NavLink>
            <NavLink to={"/profile/media" } className='profile__navbar'>
                Media
            </NavLink>
            <NavLink to={"/profile/like" } className='profile__navbar'>
                Likes
            </NavLink>
        </div>
    )
}

export default ProfileNavbar
