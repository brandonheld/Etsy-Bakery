import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';

function Account() {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const signOut = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        (user.id === undefined) ? <SignIn /> 
        :   <button id="signOutButton" onClick={signOut}>Sign out</button>
    
    )
}

export default Account;