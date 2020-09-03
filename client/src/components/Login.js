import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';
export const OPEN_SIGNUP = "OPEN_SIGNUP";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    };

    return (
            <div className='loginContainer'>
                <div className='loginContainer__header'>
                    <p>Sign in</p>
                    <button onClick={() => dispatch({ type: OPEN_SIGNUP })}>Register</button>
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
    );
};

export default Login;
