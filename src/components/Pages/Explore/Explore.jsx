import React from 'react' 
import "./Explore.scss"
import ExploreList from './ExploreList'

function Explore() {
    return (
        <div className='site-explore'>
            <div className="explore__top">
                <div className='explore__form'>
                    <div className='inputForm'>
                        <input type="text" placeholder='Qidirish...' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i class="fa-solid fa-gear"></i>
                </div>
            </div>
            <ExploreList/>
        </div>
    )
}

export default Explore
