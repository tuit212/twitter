import React from 'react'
import "./HomeContent.scss"
import user from "../../../Assets/Img/home/user.svg"
import user1 from "../../../Assets/Img/home/user1.svg"
import HomeStatic from './HomeStatic'
import user2 from "../../../Assets/Img/home/user2.svg"
import rasm from "../../../Assets/Img/home/moon.png"

function HomeContent() {
    return (

        <ul className='home__list'>
            <li className="home__item">
                <div className="home__item-top">
                    <div id='content'>
                        <div>
                            <img src={user} alt="user" />
                        </div>
                        <div className="home__item-top-content">
                            <span id='content-text'>Designsta</span>
                            <span id='content-email'>Designsta@gmail.com</span>
                            <p>
                                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </div>
                <HomeStatic/>
            </li>
            <span className='home-line'></span>
            <li className="home__item">
                <div className="home__item-top">
                    <div id='content'>
                        <div>
                            <img src={user1} alt="user" />
                        </div>
                        <div className="home__item-top-content">
                            <span id='content-text'>cloutexhibition</span>
                            <span id='content-email'>@RajLahoti .</span>
                            <p>
                                YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </div>
                <HomeStatic/>
            </li>
            <span className='home-line'></span>
            <li className="home__item">
                <div className="home__item-top">
                    <div id='content'>
                        <div>
                            <img src={user2} alt="user" />
                        </div>
                        <div className="home__item-top-content">
                            <span id='content-text'>CreativePhoto</span>
                            <span id='content-email'>@cloutexhibition .</span>
                            <p>
                                Обетда..... 
                                Кечиринглар
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </div>
                <div className='home__img'>
                    <img src={rasm} alt="ovqat" />
                </div>
                <HomeStatic/>
            </li>
        </ul>
    )
}

export default HomeContent
