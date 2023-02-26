import React from 'react'
import "./Login.scss"
import  Logo from "../../Assets/Img/logo.svg"

function Login() {
    return (
        <div className='section-login'>
            <div className="login">
                <img src={Logo} alt="logo" width={"50px"} />
                <h2>Log in to Twitter</h2>
                <form action="">
                    <input type="text" placeholder='userName' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
