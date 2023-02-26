import React from 'react'
import ExploreItem from './ExploreItem'
import { Link } from 'react-router-dom'

function ExploreList() {
    return (
        <div className='explore__list'>
            <h4>Siz uchun mavzular</h4>
            <ul>
                <ExploreItem/>
                <ExploreItem/>
                <ExploreItem/>
                <ExploreItem/>
                <Link className='link'>
                    More
                </Link>
            </ul>
        </div>
    )
}

export default ExploreList
