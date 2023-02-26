import React from 'react' 
import { NavLink } from 'react-router-dom'
import More from "../../Assets/Img/More.svg"



function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to={"/"} className='navbar__link'>
                <i class="fa fa-house Left-item_Home"></i> 
                <span>Home</span>
            </NavLink>
            <NavLink to={"/explore"} className='navbar__link'>
                <i class="fa fa-hashtag Left_item-Explore"></i>
                <span>Explore</span>
            </NavLink>
            <NavLink to={"/notification"} className='navbar__link'>
                <i class="fa fa-bell Left_item_Notifications"></i>
                <span>Notification</span>
            </NavLink>
            <NavLink to={"/messages"} className='navbar__link'>
                <i class="fa-solid fa-message Left_item_Messages"></i>
                <span>Messages</span>
            </NavLink>
            <NavLink to={"/bookmarks"} className='navbar__link'>
                <i class="fa fa-bookmark Left_item_Bookmarks"></i>
                <span>Bookmarks</span>
            </NavLink>
            <NavLink to={"/lists"} className='navbar__link'>
                <i class="fa fa fa-list Left_item_Lists"></i> 
                <span>Lists</span>
            </NavLink>
            <NavLink to={"/profile"} className='navbar__link'>
                <i class="fa fa-user Left_item_Profile"></i> 
                <span>Profile</span>
            </NavLink>
            <NavLink to={"/more"} className='navbar__link'>
                <img src={More} alt="home" width={"20px"}/>
                <span>More</span>
            </NavLink>
        </nav>
    )
}

export default Navbar
