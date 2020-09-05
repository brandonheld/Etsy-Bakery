import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';
export const OPEN_SIGNUP = "OPEN_SIGNUP";
export const CLOSE_MODAL = "CLOSE_MODAL"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    };
    const outside = (e) => {
        if (form.current.contains(e.target)) {
            return;
          }
        dispatch({ type: CLOSE_MODAL })
    }
    const demo = e => {
        e.preventDefault();
        dispatch(login('demo@example.com', 'password'))
    }
    useEffect(() => {
        document.addEventListener("click", outside); 
        return () => {
          document.removeEventListener("click", outside);
        };
      }, []);

    return (
        <div className='background' onClick={outside}>
            <div className='loginContainer' ref={form}>
                <div className='loginContainer__header'>
                    <h1>Sign in</h1>
                    <button id='registerButton' onClick={demo}>Demo</button>
                    <button id='registerButton' onClick={() => dispatch({ type: OPEN_SIGNUP })}>Register</button>
                </div>
                <form className='loginContainer__form' onSubmit={handleSubmit}>
                    <label className='loginContainer__formLable'>Email address</label>
                        <input className='loginContainer__formInput'
                            type="text" 
                            name="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    <label className='loginContainer__formLable'>Password</label>
                        <input className='loginContainer__formInput'
                            type='password' 
                            name='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    <button id='signIn' type='submit'>Sign in</button> 
                </form>  
            </div>
        </div>
    );
};

export default Login;
