import React from 'react'
import { useDispatch } from 'react-redux';

export const OPEN_SIGNIN = "OPEN_SIGNIN";

function SignIn() {
    const dispatch = useDispatch()

    return (
        <div className='navbar__signInBox'>
                <button id='signInButton' onClick={() => dispatch({ type: OPEN_SIGNIN })}>
                    Sign in
                </button>
        </div>
        
    )
}

export default SignIn;