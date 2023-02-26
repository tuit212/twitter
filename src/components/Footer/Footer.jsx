import React from 'react' 

import "./Footer.scss"
import MightLike from './MightLike/MightLike'
import Trends from './Trends/Trends'

function Footer() {
    return (
        
        <footer className='site-footer'>
            <div className="footer">
                <form className="footer__top">
                    <input type="text" placeholder='Search Twitter' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <Trends/>
                <MightLike/>
            </div>
        </footer>
    )
}

export default Footer
