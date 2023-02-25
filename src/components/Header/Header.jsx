import React from 'react'
import Navbar from './Navbar'
import Logo from "../../Assets/Img/logo.svg"
import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="site-header">
                <Link to={"/"}>
                    <img src={Logo} alt="site logo" />
                </Link>
                <Navbar/>
            </header>
        </>
    )
}

export default Header
