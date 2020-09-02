import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    };

    return (
        <div className='modal'>
            <div className='loginContainer'>
                <div className='loginContainer__header'>
                    <p>Sign in</p>
                    <button>Register</button>
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
