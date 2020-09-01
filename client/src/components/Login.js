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
        <form onSubmit={handleSubmit}>
            <label>
                Email address
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <label>
                Password
                <input 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>
            <button type='submit'>Sign in</button> 
        </form>
    );
};

export default Login;
