import React from 'react'
import "./HomeContent.scss"
import user from "../../../Assets/Img/home/user.svg"
// import user1 from "../../../Assets/Img/home/user1.svg"
// import user2 from "../../../Assets/Img/home/user1.svg"

function HomeContent() {
    return (
        <ul className='home__list'>
            <li className="home__item">
                <div className="home__item-top">
                    <div>
                        <img src={user} alt="user" />
                    </div>
                    <div className="home__item-top-content">
                        <span>Designsta</span>
                        <span>Designsta@gmail.com</span>
                        <p>
                            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                        </p>
                    </div>
                </div>
            </li>
            <span className='home-line'></span>
            <li className="home__item">
                <div className="home__item-top">
                    <div>
                        <img src={user} alt="user" />
                    </div>
                    <div className="home__item-top-content">
                        <span>Designsta</span>
                        <span>Designsta@gmail.com</span>
                        <p>
                            Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                        </p>
                    </div>
                </div>
            </li>
            <span className='home-line'></span>
            
        </ul>
    )
}

export default HomeContent
