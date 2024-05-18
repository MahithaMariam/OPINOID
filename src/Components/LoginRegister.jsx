import React, { useState } from 'react';
import './LoginRegister.css';

import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from './Awesome Beautiful Anime Scenery Wallpapers - WallpaperAccess.jpeg';
import { app, auth } from './firebase'; // Correct path to firebase.js


const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const authInstance = getAuth(app);

    const showRegisterForm = () => {
        setIsRegister(true);
    };

    const showLoginForm = () => {
        setIsRegister(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(authInstance, email, password);
            alert('Login successful');
        } catch (error) {
            alert('Error logging in: ' + error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(authInstance, email, password);
            alert('Registration successful');
        } catch (error) {
            alert('Error registering: ' + error.message);
        }
    };

    return (
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="form-container">
                <div className={`form-box login ${isRegister ? 'hidden' : ''}`}>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input 
                                type="email" 
                                placeholder='Email' 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                placeholder='Password' 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
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
                    <form onSubmit={handleRegister}>
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder='Username' 
                                required 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input 
                                type="email" 
                                placeholder='Email' 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                placeholder='Password' 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
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
