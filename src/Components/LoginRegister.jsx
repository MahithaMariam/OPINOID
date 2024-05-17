import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';  

import backgroundImage from './Awesome Beautiful Anime Scenery Wallpapers - WallpaperAccess.jpeg';

const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);

    const showRegisterForm = () => {
        setIsRegister(true);
    };

    const showLoginForm = () => {
        setIsRegister(false);
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="form-container">
                <div className={`form-box login ${isRegister ? 'hidden' : ''}`}>
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <button type="button" onClick={() => console.log("Forgot password clicked")}>Forgot password?</button>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <button type="button" onClick={showRegisterForm}>Register</button></p>
                        </div>
                    </form>
                </div>
                <div className={`form-box register ${isRegister ? '' : 'hidden'}`}>
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder='Email' required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />I agree to the terms & conditions</label>
                        </div>
                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>Already have an account? <button type="button" onClick={showLoginForm}>Login</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
