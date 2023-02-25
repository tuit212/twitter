import React from 'react'
import "./HomeContent.scss"
import user from "../../../Assets/Img/home/user.svg"
import user1 from "../../../Assets/Img/home/user1.svg"
import user2 from "../../../Assets/Img/home/user1.svg"

function HomeContent() {
    return (
        <ul className='home__list'>
            <li className="home__item">
                <img src={user} alt="user" />
            </li>
        </ul>
    )
}

export default HomeContent
