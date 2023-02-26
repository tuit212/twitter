import React from 'react'
import "./MightLike.scss"
import user from "../../../Assets/Img/footer/user.svg"
import user1 from "../../../Assets/Img/footer/user1.svg"

function MightLike() {
    return (
        <div className='mightLike'>
            <h4>You might like</h4>
            <ul>
                <li>
                    <div>
                        <img src={user} alt="user" />
                        <div>
                            <h6>Mushtariy</h6>
                            <p>@Mush266</p>
                        </div>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={user1} alt="user" />
                        <div>
                            <h6>Shuhratbek</h6>
                            <p>@Shuhratbek</p>
                        </div>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MightLike
