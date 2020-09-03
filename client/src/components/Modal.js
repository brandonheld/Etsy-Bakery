import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login'
import SignUp from './Signup'




function DisplayModal() {
    const display = useSelector(state => state.ui)
    
    const displaying = ((display.isOpenSignin) ? <Login /> : null 
        || (display.isOpenSignup) ? <SignUp /> : null)

    return (
        <div>
            {displaying}
        </div>
    )

}

export default DisplayModal;