import React from 'react' 
import "./Home.scss"
import yulduz from "../../../Assets/Img/yulduz.svg"
import person from "../../../Assets/Img/person.svg"
import photo from "../../../Assets/Img/home/photo.svg"
import gif from "../../../Assets/Img/home/gif.svg"
import schedule from "../../../Assets/Img/home/schedule.svg"
import smile from "../../../Assets/Img/home/smile.svg"
import stats from "../../../Assets/Img/home/stats.svg"
import HomeContent from './HomeContent'


function Home() {

    // const homeArr = [
    //     {
    //         name: "Designsta",
    //         img : "../../../Assets/Img/person.svg",
    //         inputValue : "Designsta / person / person.svg    / person.svg / person.svg / person.svg / person.svg",
    //         email : "Designsta@gmail.com",
    //     }
    // ]

    return (
        <main className='site-home'>
            <div className="home">
                <div className='home__text'>
                    <p>Home</p>
                    <img src={yulduz} alt="yulduz" />
                </div>
                <span className='home-line'></span>
                <div className="home__person">
                    <div>
                        <img src={person} alt="person" />
                        <input type="text" placeholder='What’s happening ...' />
                        <div className='icons'>
                            <img src={photo} alt="photo" />
                            <img src={gif} alt="gif" />
                            <img src={schedule} alt="schedule" />
                            <img src={smile} alt="smile" />
                            <img src={stats} alt="stats" />
                        </div>
                        <button type='submit'>Tweet</button>
                    </div>
                </div>
                <span className='home-line'></span>
                <HomeContent/>
            </div>
        </main>
    )
}

export default Home
