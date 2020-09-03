import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp } from '../store/auth';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(username, password, email))
    };

    return (
        <div className='loginContainer'>
            <div className='loginContainer__headerSignUp'>
                <h2>Create your account</h2>
                    <p>Registration is easy.</p>
            </div>
            <form className='loginContainer__form' onSubmit={handleSubmit}>
                <label className='loginContainer__formLable'>Email address</label>
                    <input className='loginContainer__formInput'
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                <label className='loginContainer__formLable'>First name</label>
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
                <button id='signIn' type='submit'>Register</button> 
            </form>  
        </div>
    );
};


export default SignUp;