import React from 'react' 
import "./Trends.scss"
import { Link } from 'react-router-dom'

function Trends() {
    return (
        <div className='Trends'>
            <div className="Trends__top">
                <h4>Trends for you</h4>
                <i class="fa-solid fa-gear"></i>
            </div>
            <ul className="Trends__list">
                <li className="Trends__item">
                    <div>
                        <p>Trending in Germany</p>
                        <h5>Revolution</h5>
                        <span>50.4K Tweets</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </li>
                <li className="Trends__item">
                    <div>
                        <p>Trending in Germany</p>
                        <h5>Revolution</h5>
                        <span>50.4K Tweets</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </li>
                <li className="Trends__item">
                    <div>
                        <p>Trending in Germany</p>
                        <h5>Revolution</h5>
                        <span>50.4K Tweets</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis Left_item_More" ></i> 
                    </div>
                </li>
                <li className="Trends__item">
                    <Link className='link'>
                        Show more
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Trends
