import React from 'react' 
import { NavLink } from 'react-router-dom'
import Home from "../../Assets/Img/home.svg"
import Explore from "../../Assets/Img/explore.svg"
import Notification from "../../Assets/Img/Notification.svg"
import Messages from "../../Assets/Img/Messages.svg"
import Bookmarks from "../../Assets/Img/Bookmarks.svg"
import Lists from "../../Assets/Img/Lists.svg"
import Profile from "../../Assets/Img/Prome.svg"
import More from "../../Assets/Img/More.svg"



function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to={"/"} className='navbar__link'>
                <img src={Home} alt="home" width={"28px"}/>
                <span>Home</span>
            </NavLink>
            <NavLink to={"/explore"} className='navbar__link'>
                <img src={Explore} alt="home" width={"28px"}/>
                <span>Explore</span>
            </NavLink>
            <NavLink to={"/notification"} className='navbar__link'>
                <img src={Notification} alt="home" width={"28px"}/>
                <span>Notification</span>
            </NavLink>
            <NavLink to={"/messages"} className='navbar__link'>
                <img src={Messages} alt="home" width={"28px"}/>
                <span>Messages</span>
            </NavLink>
            <NavLink to={"/bookmarks"} className='navbar__link'>
                <img src={Bookmarks} alt="home" width={"28px"}/>
                <span>Bookmarks</span>
            </NavLink>
            <NavLink to={"/lists"} className='navbar__link'>
                <img src={Lists} alt="home" width={"28px"}/>
                <span>Lists</span>
            </NavLink>
            <NavLink to={"/profile"} className='navbar__link'>
                <img src={Profile} alt="home" width={"28px"}/>
                <span>Profile</span>
            </NavLink>
            <NavLink to={"/more"} className='navbar__link'>
                <img src={More} alt="home" width={"28px"}/>
                <span>More</span>
            </NavLink>
        </nav>
    )
}

export default Navbar
